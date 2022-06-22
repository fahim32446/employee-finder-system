import postCv from '../models/postCv.js'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'



export const getPostsByCreator = async (req, res) => {
     const { name } = req.params;

     // const name = "118419585921103777699"
     // console.log(name);
     try {
          const posts = await postCv.find({ creator: name });
          res.json({ data: posts });
     } catch (error) {
          res.status(404).json({ message: error.message });
     }
}

// export const getPostsByTags =async (res, req) => {
//      const {tag} = res.params;
//      console.log(tag);


// }


export const getPostsByTags = async (req, res) => {
     const { tag } = req.params;

     // console.log(tag);
     try {
          const posts = await postCv.find({ $or: [{ skills: tag }, { Job_type: tag }] });

          // const posts = await PostMessage.find({ $or: [ { skills: tag }, { Job_type: { $in: tag } } ]});
          //const posts = await postCv.find({ $or: [{ skills: tag }] });
          res.json({ data: posts });
          // console.log(posts);

     } catch (error) {
          res.status(404).json({ message: error.message });
     }
}


export const getPost = async (req, res) => {
     const { id } = req.params;
     try {
          const post = await postCv.findById(id);
          res.status(200).json(post)
     } catch (error) {
          res.status(error)
     }

}


export const sendMessage = async (req, res) => {
     const { name, EmployerEmail, text, id } = req.body;

     // console.log(name, EmployerEmail, text, id);

     try {
          const [{ email }] = await postCv.find({ _id: id });

          let transporter = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                    user: 'employeefinder.official@gmail.com',
                    pass: 'keioenpypuszjxnm',
               },
          });


          var mailOptions = {
               form: 'employeefinder.official@gmail.com',
               to: email,
               subject: 'Job alert form EmployeeFinder',
               text: `${text} >>You receive this email from ${EmployerEmail}`,
          }


          transporter.sendMail(mailOptions, function (error, info) {
               if (error) {
                    console.log(error);
               } else {
                    console.log("Email Sent" + info.response);
               }
          })









     } catch (error) {

          console.log(error);

     }

}



export const getPosts = async (req, res) => {
     const { page } = req.query;

     // console.log(page);

     try {
          const LIMIT = 6;
          const startIndex = (Number(page) - 1) * LIMIT;
          const total = await postCv.countDocuments({});
          const posts = await postCv.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

          res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });

     } catch (error) {
          res.status(404).json(error);
     }
}

export const getPostsSearch = async (req, res) => {
     const { searchQuery } = req.query;


     console.log(`Controller ${searchQuery}`);

     try {
          const title = new RegExp(searchQuery, 'i');

          const posts = await postCv.find({ $or: [{ skills: title }] });

          res.json({ data: posts });

     } catch (error) {
          res.status(404).json(error);
     }
}

export const createPost = async (req, res) => {
     const info = req.body;
     // console.log(info);
     const newCv = new postCv({ ...info, creator: req.userId, createdAt: new Date().toISOString() });

     try {
          await newCv.save();
          res.status(201).json(newCv)

     } catch (error) {
          console.log(error);
     }
}


export const updatePost = async (req, res) => {
     const { id } = req.params;

     const { name, email, phone, address, dob, schoolName, schoolCertificate, schoolGpa, collageName, collageCertificate, collageGpa, honrsName, honrsCertificate, honrsCGPA, workExperience1, workJoin1, workLeave1, workExperience2, workJoin2, workLeave2, skills, about, file, Facebook, linkedin, Skype, jobtitle, Interested, ProjectOne, ProjectOneGit, ProjectTwo, ProjectTwoGit, ProjectThree, ProjectThreeGit, Salary, Website, Github, Job_type } = req.body;

     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     const updatedPost = {
          name, email, phone, address, dob, schoolName, schoolCertificate, schoolGpa, collageName, collageCertificate, collageGpa,
          honrsName, honrsCertificate, honrsCGPA, workExperience1, workJoin1, workLeave1, workExperience2, workJoin2, workLeave2, skills, about, file, Facebook, linkedin, Skype, jobtitle, Interested, _id: id, ProjectOne, ProjectOneGit, ProjectTwo, ProjectTwoGit, ProjectThree, ProjectThreeGit, Salary, Website, Github, Job_type
     };

     await postCv.findByIdAndUpdate(id, updatedPost, { new: true });

     res.json(updatedPost);
}




export const deletePost = async (req, res) => {
     const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     await postCv.findByIdAndRemove(id);

     res.json({ message: "Post deleted successfully." });
}
