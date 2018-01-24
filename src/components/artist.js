import React,{ Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Artist extends Component {

    state= {
        artist:[]
    }

    
    componentWillMount() {
        axios.get(`http://localhost:3004/artists?id=${this.props.match.params.id}`)
        .then(response =>{
           this.setState({
             artist:response.data[0]
           })
        })

    }
    
    render(){
        let artist = this.state.artist;
        return (
            <div className="artist_view">
                <div className="artist_background" style={{
                    background:`url(/images/${artist.cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{artist.name}</div>
                </div>
                <div className="artist_description">
                    <p>{artist.bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {artist.style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    { artist.albums ? 
                        artist.albums.map( item =>(
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>
                            </div>
                                
                        </div>
                    ))
                    :null
                }
                </div>
            </div>
        );
    }
};

export default Artist;