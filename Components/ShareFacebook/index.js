import React, { Component } from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

class ShareFacebook extends Component {
    
    render() {
        const {FacebookShareButton, VKShareButton} = ShareButtons;
        const {FacebookShareCount, VKShareCount} = ShareCounts;
        const shareUrl = "google.com"
        const FacebookIcon = generateShareIcon('facebook');
        const VKIcon = generateShareIcon('vk');
        return(
            <div><h1>hi</h1>
                <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                <VKShareButton url={shareUrl}><VKIcon size={32} round={true} /></VKShareButton>
                {/*<FacebookShareCount url={shareUrl} />*/}
                
            </div>
        )
    }

}

export default ShareFacebook