import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts = [{
    id: '0',
    description: 'test',
    imgURL: "https://cdn3.digitalartsonline.co.uk/cmsdata/slideshow/3652838/rick-and-morty-art.jpg"
},{
    id: '1',
    description: 'test2',
    imgURL: "https://cdn3.digitalartsonline.co.uk/cmsdata/slideshow/3652838/rick-and-morty-art.jpg"
},{
    id: '2',
    description: 'test3',
    imgURL: "https://cdn3.digitalartsonline.co.uk/cmsdata/slideshow/3652838/rick-and-morty-art.jpg"
}]


class Main extends Component {
    render() {
        return <div>
            <Title title={'Photos'} />
        
        </div>
    }
}

export default Main