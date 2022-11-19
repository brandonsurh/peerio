import React from "react";
import { Box, TextField } from "@material-ui/core";

const UploadPage = () => {
    return (
        <div>
            <form>
                <h1>Upload a file</h1>
                <TextField fullWidth label="Enter description" />
                <TextField fullWidth label="Author" />
            </form>
        </div>
    )
}

export default UploadPage;