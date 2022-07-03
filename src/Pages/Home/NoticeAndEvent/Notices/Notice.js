import React from 'react';
import { Link } from 'react-router-dom';

import './Notice.scss'
const Notice = ({note}) => {
  

  
    return (
      
            <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{backgroundImage:`url(data:image/png;base64,${note.image})` }} ></div>
              <ul class="details">
                <li class="author">{note.headline}</li>
                <li class="date">{note.date}</li>
            
              </ul>
            </div>
            <div class="description" style={{textAlign:'left'}}>
              <h2>{note.headline}</h2>
              <p>{note.notice}</p>
              <p class="read-more">
                <Link to={`/detail/${note._id}`}>Read More</Link>
              </p>
            </div>
          </div>
        
    );
};

export default Notice;