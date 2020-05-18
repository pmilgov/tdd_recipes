import React from 'react';

class MyListApp extends React.Component {

    state = {
        myList: [],
    }


    componentDidMount() {
        this.setState({
            myList: [...this.state.myList, { id: 'b', firstName: 'Peggy', lastName: 'Milos' },
            { id: 'c', firstName: 'Fred', lastName: 'Flintstone' },
            { id: 'd', firstName: 'Wilma', lastName: 'Flintstone' }]
        })
    
    }

    render() {

    //    const myList= [{ id: 'a', firstName: 'Peggy', lastName: 'Milos' },
    //    { id: 'b', firstName: 'Fred', lastName: 'Flintstone' },
    //    { id: 'c', firstName: 'Wilma', lastName: 'Flintstone' }]

    return (
        <div>
            {this.state.myList.map(item => (
                <div>
                    <li>{item.firstName} {item.lastName}</li>
                </div>
            ))}
        </div>
    )
}
}
/*
return (
    <div className="MyListApp">
        <h1 className="MyListApp-header">My Fancy List</h1>
        <ul>
            {
                myList.map(function (item) {
                    return <li key={item}>{item}</li>
                })
            }
        </ul>
    </div>
)
*/

export default MyListApp;