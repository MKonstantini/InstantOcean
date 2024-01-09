import { FunctionComponent } from "react";

interface PageTopImgProps {
    imgSrc: any
    title: string
    subTitle: string
}

const PageTopImg: FunctionComponent<PageTopImgProps> = ({ imgSrc, title, subTitle }) => {
    return (
        <div className="position-relative m-0 p-0" style={{ height: "20rem", width: "100%" }}>
            <img src={imgSrc} alt="pageTopImg" className="generalFill" />
            <div className="gradientOverlay"></div>
            <h1 className="pageTitle">{title}</h1>
            <h5 className="pageSubTitle">{subTitle}</h5>
        </div>
    );
}

export default PageTopImg;