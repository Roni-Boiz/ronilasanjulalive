import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { Fade } from "react-reveal";
// import axios from "axios";

class ProjectGallery extends Component {
    render() {
        const project = this.props.project;
        const theme = this.props.theme;
        return (
            <Fade bottom duration={2000} distance="40px">
                    <div className="" style={{ opacity: 100}}>
                        <div className="repo-name-div">
                            <p
                                className="repo-name"
                                style={{ color: theme.text }}
                            >
                                {project.title}
                            </p>
                        </div>
                        <p
                            className="repo-description"
                            style={{ color: theme.text, display:"block" }}
                        >
                            {project["description"]}
                        </p>
                        <ImageGallery items={project.project_images_path} />;
                    </div>
            </Fade>
        );

    }
}

export default ProjectGallery;