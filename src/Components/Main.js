import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'


class Main extends Component {
    constructor(){
        super()
        this.state = {
            posts: [{
                id: '0',
                description: 'test',
                imgURL: "https://cdn3.digitalartsonline.co.uk/cmsdata/slideshow/3652838/rick-and-morty-art.jpg"
            },{
                id: '1',
                description: 'test2',
                imgURL: "http://www.indiewire.com/wp-content/uploads/2017/07/rick-and-morty.png?w=780"
            },{
                id: '2',
                description: 'test3',
                imgURL: "https://cdn-images-1.medium.com/max/900/1*cBie_JM1QFY78KfvOw2GoQ.png"
            }]
            
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state)=> ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        return <div>
            <Title title={'Photos'} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }
}

export default Main