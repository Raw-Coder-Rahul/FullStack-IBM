const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
};

exports.applyToJob = async (req, res) => {
    const { jobId } = req.body;

    try {
        const job = await Job.findById(jobId);
        if (!job) return res.status(404).json({ message: "Job not found" });

        job.applications.push(req.user.id);
        await job.save();
        res.status(200).json({ message: "Application submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error applying to job", error });
    }
};
