import React from "react";
import ProjectImage from "../../../static/img/blue.jpg";
import Button from "../../components/Button/Button";
import "./startpage.css";

function StartPage () {
    return (
        <>
            <main className="main-content">
                <StartArticle />
                <LearnMoreComponent />
            </main>
        </>
    );
}

function StartArticle () {
    return (
        <div className="article-intro">
            <article>
                <div className="article-welcome">
                    <h1>Zano Documentation</h1>
                    <span> 
                        Sed ut perspiciatis unde omnis
                        iste natus error sit voluptatem
                        accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. 
                    </span>
                </div>
                <StartTextBlock 
                    textBlockTitle={"Getting started"}
                    textBlockItems={
                        [
                            {
                                textBlockLink: "#",
                                textBlockLinkText: "Unassigned link",
                                textBlockContent: `At vero eos et accusamus et iusto
                                odio dignissimosducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et
                                quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et dolorum fuga`,
                            }
                        ]
                    } 
                />
                <StartTextBlock 
                    textBlockTitle={"Start learning"}
                    textBlockItems={
                        [
                            {
                                textBlockLink: "#",
                                textBlockLinkText: "Unassigned link",
                                textBlockContent: `At vero eos et accusamus et iusto
                                odio dignissimosducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et
                                quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et dolorum fuga`,
                            }
                        ]
                    } 
                />
                <StartTextBlock 
                    textBlockTitle={"Mine and Stake"}
                    textBlockItems={
                        [
                            {
                                textBlockLink: "#",
                                textBlockLinkText: "Unassigned link",
                                textBlockContent: `At vero eos et accusamus et iusto
                                odio dignissimosducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et
                                quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et dolorum fuga`,
                            }
                        ]
                    } 
                />
                <StartTextBlock
                    textBlockTitle={"Build on Zano"}
                    textBlockItems={
                        [
                            {
                                textBlockLink: "#",
                                textBlockLinkText: "Unassigned link",
                                textBlockContent: `At vero eos et accusamus et iusto
                                odio dignissimosducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et
                                quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et dolorum fuga`,
                            },
                            {
                                textBlockLink: "#",
                                textBlockLinkText: "Unassigned link",
                                textBlockContent: `On the other hand,
                                we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble that are bound to ensue;`,
                            }
                        ]
                    } 
                />
            </article>
            <BuildedProjects />        
        </div>
    );
}

function BuildedProjects () {
    return (
        <div>
            <div className="builded-projects">
                <span>Projects built on Zano</span>
                <div className="builded-projects__images">
                    <img src={ProjectImage} alt="" width="280px" height="115px"/>
                    <img src={ProjectImage} alt="" width="280px" height="115px"/>
                    <img src={ProjectImage} alt="" width="280px" height="115px"/>
                </div>
            </div>
        </div>
    );
}

function LearnMoreComponent (props) {
    return (
        <div className="learn-more">
            <h2>Learn more</h2>
            <div className="learn-more__links">
                <Button link="#" text="Developers"/>
                <Button link="#" text="Miners/Stakers"/>
                <Button link="#" text="Users"/>
            </div>
        </div>
    );
}

function StartTextBlock (props) {
    return (
        <div className="start-text-block">
            <h2>{props.textBlockTitle}</h2>
            {props.textBlockItems.map((item) => (
                <StartTextBlockItem 
                    key={item.textBlockLink}
                    textBlockLink={item.textBlockLink}
                    textBlockLinkText={item.textBlockLinkText}
                    textBlockContent={item.textBlockContent}
                />    
            ))}
        </div>
    );
}

function StartTextBlockItem (props) {
    return (
        <>  
            <span>
                <a href={props.textBlockLink}>{props.textBlockLinkText + " "}</a>
                {props.textBlockContent}
            </span>
        </>
    )
}

export default StartPage;