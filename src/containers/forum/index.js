import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 1.1rem;
`

const LineText = styled.h5`
  font-size: 0.8rem;
  opacity: 0.7;
`

const threadMock = [
  {
    id: 1,
    title: 'Thank you for post',
    author: 'Dave Smith',
    github: 'DavSmithCodes',
    created_at: new Date(),
    favorites: 11,
    opinions: 5
  },
  {
    id: 2,
    title: 'Second post',
    author: 'Second Smith',
    github: 'SecondCodes',
    created_at: new Date(),
    favorites: 0,
    opinions: 20
  },
]

class ForumPage extends React.Component {
  componentDidMount() {
    console.log(this)
  }
  render() {
    const topic = this.props.match.params.name

    return (
      <div className="mx-auto w-75 mt-4">
        <div className="card">
          <div className="card-header">
            Discussions
          </div>

          <div className="list-group list-group-flush">
            {
              threadMock.map(item => {
                return (
                  <div key={item.id} className="list-group-item">
                    <Link to={`/forum/${topic}/${item.id}`}><Title className="text-left mb-3">{item.title}</Title></Link>
                    <LineText className="text-left">{item.author} - <i className="fa fa-github m-1"></i> {item.github}</LineText>
                    <LineText className="text-left">
                      
                      <span className="mr-2">7 months ago</span>
                      <span className="m-2">{item.favorites} favorites</span>
                      <span className="m-2">{item.opinions} opinions</span>
                    </LineText>
                  </div>
                )    
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

export default ForumPage