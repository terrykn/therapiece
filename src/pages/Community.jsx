import React from 'react';
import { FacebookEmbed } from 'react-social-media-embed';

const Community = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px', overflow: 'auto', maxHeight: '550px', padding: '20px' }}>
      <h2>My Therapiece Community</h2>
      <div style={{ marginBottom: '10px', width: '480px' }}>
        <FacebookEmbed url="https://www.facebook.com/1444742715/posts/pfbid02mhtw6pXM6yGTbpzXQ9GYihF5JsuoKqfUd6rdM2wJhyjdTSR48ZLerCi6qU7vwQswl/?mibextid=xXumFJ" width='100%'/>
      </div>
      <div style={{ marginBottom: '10px', width: '480px' }}>
        <FacebookEmbed url="https://www.facebook.com/100064850104020/posts/pfbid0AjyVGhkTdzKzM1FZPvEaHzQRync3MpAK5gUB2XEAF33PKgDLatHXXR75wEqEa2A7l/?mibextid=xXumFJ" width='100%'/>
      </div>
      <div style={{ marginBottom: '10px', width: '480px' }}>
        <FacebookEmbed url="https://www.facebook.com/100052652658715/posts/pfbid0hYsSikiud8svvMaKQj6o8AM8CRg55N83Ko183msq8Us7RRPr5WpRhEPCLNQwXEyNl/?mibextid=xXumFJ" width='100%'/>
      </div>
      
    </div>
  );
};

export default Community;
