import React from "react";
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">JJoin</span>
                </div>
                <div className="topRight">
                    {/* topbarIcon */}
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <GridViewIcon />
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img 
                        src="https://cdn.mos.cms.futurecdn.net/8KhN9AY3JNyLzFWJuKRkNb.jpg" 
                        alt="image" 
                        className="topAvatar" 
                    />
                </div>
            </div>
        </div>
    )
}