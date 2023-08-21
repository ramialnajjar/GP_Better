import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, IconButton, Box, Chip } from "@mui/material";
import { ThumbDown, ThumbUp, ThumbUpOutlined, ThumbDownOutlined } from "@mui/icons-material";
import { FlexBetween } from "../../../Common/Components/FlexBetween";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StatusTracker from "./StatusTracker";
// Import the SetVote function
import { SetVote, getVoteStatus, setDownvote, removeVote } from "../Service/SetVoteApi";

// css style
import "../Style/style.css"

const ComplaintPost = ({ data }) => {
    const [complaintData, setComplaintData] = useState(data);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleVote = async (complaintId, isDownvote) => {
        try {
            if (isDownvote) {
                // If it's a downvote, call the setDownvote function
                await setDownvote(complaintId);
            } else {
                // If it's an upvote, call the SetVote function
                await SetVote(complaintId);
            }

            // After voting, update the complaintData state to reflect the new vote status
            const updatedData = complaintData.map((complaint) => {
                if (complaint.intComplaintId === complaintId) {
                    complaint.isDownVote = !isDownvote;
                    complaint.intVotersCount += isDownvote ? 1 : -1;
                }
                return complaint;
            });

            setComplaintData(updatedData);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <Box sx={{ display: "grid", gap: 2, width: '100%' }}>
            {data.map((complaint) => (
                <Card key={complaint.intComplaintId} className="filterStyle">
                    <CardContent>
                        <Typography variant="h3" component="div" className="app">
                            <FlexBetween>
                                {complaint.strUserName}
                                
                                <Chip
                                    className="status-chip"
                                    icon={<RadioButtonCheckedIcon />}
                                    color="primary"
                                    label={complaint.strStatus}
                                    variant="outlined"
                                    sx={{ p: 1 }}
                                />
                            <div className="status-box">
                                <Typography variant="body2" >الحالة العامة: <StatusTracker currentStage={complaint.strStatus}/> </Typography>
                            </div>
                            </FlexBetween>
                        </Typography>

                        <Typography variant="h5" component="div">
                            {complaint.strComplaintTypeAr}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {complaint.strComment}
                        </Typography>
                        <br />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <img src="https://via.placeholder.com/900x400" alt="Test Image" style={{ flex: 1, objectFit: 'cover' }} />

                            <div>
                                <IconButton
                                    aria-label="Upvote"
                                    onClick={() => handleVote(complaint.intComplaintId, false)}
                                >
                                    {complaint.isDownVote === false ? <ThumbUp /> : <ThumbUpOutlined />}
                                </IconButton>
                                <span>{complaint.intVotersCount}</span>
                                <IconButton
                                    aria-label="Downvote"
                                    onClick={() => handleVote(complaint.intComplaintId, true)}
                                >
                                    {complaint.isDownVote === true ? <ThumbDown /> : <ThumbDownOutlined />}
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}

        </Box>

    );
};

export default ComplaintPost;
