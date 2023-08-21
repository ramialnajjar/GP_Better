import React from 'react';
import '../Style/StatusTracker.css'; // Import your CSS file for styling
import { Box } from '@mui/system';

const StatusTracker = ({ currentStage }) => {
    const stages = [
        'قيد الانتظار',
        'موافق عليه',
        'مجدول',
        'قيد العمل',
        'انتظار التقييم',
        'معاد',
        'مرفوض',
        'منجز',
    ];

    const getColorClass = (stage) => {
        switch (currentStage) {
            case 'completed':
                return stage === 'منجز' ? 'completed-stage' : '';
            case 'waiting evaluation':
                return stage === 'انتظار التقييم' ? 'waiting-evaluation-stage' : '';
            case 'in progress':
                return stage === 'قيد العمل' ? 'in-progress-stage' : '';
            case 'scheduled':
                return stage === 'مجدول' ? 'scheduled-stage' : '';
            case 'approved':
                return stage === 'موافق عليه' ? 'approved-stage' : '';
            case 'pending':
                return stage === 'قيد الانتظار' ? 'pending-stage' : '';
            case 'rejected':
                return stage === 'مرفوض' ? 'rejected-stage' : '';
            case 're-filed':
                return stage === 'معاد' ? 'refiled-stage' : '';
            default:
                return '';
        }
    };

    return (
        <Box className="status-tracker" sx={{ borderRadius: '16px' }}>
            {stages.map((stage, index) => (
                <div
                    key={index}
                    className={`stage${index + 1} ${getColorClass(stage)}`}
                >
                    <div className="stage-point" />
                    <div className="stage-text">{stage}</div>
                </div>
            ))}
        </Box>
    );
};

export default StatusTracker;
