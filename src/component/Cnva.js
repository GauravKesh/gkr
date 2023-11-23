import React from 'react'

export default function Cnva() {
    return (
        <div style={{
            position: "relative", 
            width: "100%", 
            height: "0", 
            paddingTop: "56.2225%",
            paddingBottom: "0", 
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", 
            marginTop: "1.6em", 
            marginBottom: "0.9em", 
            overflow: "hidden",
            borderRadius: "8px", 
            willChange: "transform"
        }}>
            <iframe 
                loading="lazy" 
                style={{
                    position: "absolute", 
                    width: "100%", 
                    height: "100%", 
                    top: "0", 
                    left: "0", 
                    border: "none", 
                    padding: "0",
                    margin: "0"
                }}
                src="https://www.canva.com/design/DAFz7JoPvLQ/view?embed" 
                allowFullScreen
                allow="fullscreen"
                title='contact'
            >
            </iframe>
            <a href="https://www.canva.com/design/DAFz7JoPvLQ/view?utm_content=DAFz7JoPvLQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener noreferrer">

            </a>
        </div>
    )
}