import React from 'react';
import { Container } from 'react-bootstrap';

function YouTubeEmbed() {
    return (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: "100%", overflow: 'hidden', width:"100%" }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/NQUoDevsDyE?autoplay=1&loop=1&controls=0&modestbranding=1&disablekb=1&mute=1"
                    allow="autoplay"
                    title="Placeholder Video"
                    allowFullScreen
                />
            </div>
    );
};

export default YouTubeEmbed;
