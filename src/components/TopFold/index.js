import React from "react"
import Button from "../../common/Button";
import "./topFold.css";

const TopFold = () => {
    return (
        <div className="topfold absolute-center">
            <div className="tf-left">
                <div className="tf-heading">
                    Discover collect, & sell 
                    <span className="heading-gradient">Extraordinary </span>  NFTs 
                </div>
                <div className="tf-description">
                    Please make sure that you're buying and selling the most trending Nfts out there. 
                    Welcome to our marketplace
                </div>
                <div className="tf-left-btns">
                    <Button btnType="PRIMARY" btnText="Explore"/>
                    <Button btnType="SECONDARY" btnText="Create" 
                     customClass="tf-left-secondary-btn"/>
                </div>
                <div className="tf-left-infostats">
                    <div className="tf-is-InfoItem absolute-center">
                        <div className="tf-InfoItem-count">200k+</div>
                        <div className="tf-InfoItem-label">Collections</div>
                    </div>
                    <div className="tf-is-InfoItem absolute-center">
                        <div className="tf-InfoItem-count">10k+</div>
                        <div className="tf-InfoItem-label">Artists</div>
                    </div>
                    <div className="tf-is-InfoItem absolute-center">
                        <div className="tf-InfoItem-count">432k+</div>
                        <div className="tf-InfoItem-label">Comminity</div>
                    </div>
                </div>

            </div>

            <div className="tf-right">
                
            </div>
        </div>
    );
};

export default TopFold;