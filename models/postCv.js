import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
    creator: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    dob: String,

    schoolName: String,
    schoolCertificate: String,
    schoolGpa: String,

    collageName: String,
    collageCertificate: String,
    collageGpa: String,

    honrsName: String,
    honrsCertificate: String,
    honrsCGPA: String,

    workExperience1: String,
    workJoin1: String,
    workLeave1: String,

    workExperience2: String,
    workJoin2: String,
    workLeave2: String,

    skills: [String],
    about: String,
    file: String,

    Website: String,
    Github: String,
    Facebook: String,
    linkedin: String,
    Skype: String,

    jobtitle: String,
    Interested: [String],
    Job_type: {
        type: String,
        default: 'FullTime'
    },

    Salary: String,
    
    ProjectOne: String,
    ProjectOneGit: String,
    ProjectTwo: String,
    ProjectTwoGit: String,
    ProjectThree: String,
    ProjectThreeGit: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
})


const postCv = mongoose.model('postCv', cvSchema);
export default postCv;