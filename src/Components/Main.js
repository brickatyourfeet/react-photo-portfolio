import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

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

    addPhoto(postSubmitted){
        this.setState((state)=> ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    componentDidMount(){
        console.log('component did mount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update (re-render)')
        console.log('prevProps: ' + prevProps)
        console.log('prevState posts: ' + prevState.posts)
        console.log('current state: ' + this.state)
        console.log(this.state)
    }

    render() {
        return (
            <div>
            <Route exact path = "/" render={()=> (
            <div>   
                <Title title={'Photos'} />
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
            </div>
            )} />
            
            <Route path = "/AddPhoto" render={({history})=> (
                <AddPhoto onAddPhoto={(submittedPost)=> {
                    this.addPhoto(submittedPost)
                    history.push('/')
                }}/>
            )} />
           

        </div>
        )
    }
    
}


export default Main

//*for single component nav, just add the component prop*/
// <Route path = "/AddPhoto" component={AddPhoto} />