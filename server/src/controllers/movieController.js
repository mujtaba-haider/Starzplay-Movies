const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/homepage.json')

exports.getMovies = (req, res) => {
    try {
        // Validation for json file
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ success: false, message: "Record not found." })
        }

        // Reading data from homepage.json
        const homePageData = fs.readFileSync(filePath);

        // Parsing JSON data
        const parsedData = JSON.parse(homePageData);

        // Validate if titles property exist in parsedData
        if (!parsedData || !parsedData.titles) {
            return res.status(500).json({ success: false, message: "Invalid data format." })
        }

        // Sending parsed data
        const result = parsedData.titles;

        return res.status(200).json({ success: true, result: result });
    }
    catch (err) {
        console.error("Error reading file:", err);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}