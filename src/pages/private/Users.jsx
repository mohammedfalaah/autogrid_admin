import React, { useEffect, useState } from 'react'
import Axioscall from '../../services/Axioscall'
import { getUsersApi } from '../../services/BaseUrl'

const Users = () => {
    const [user,setUser] = useState([])

    const getUsers = async () => {
        try {
            const response = await Axioscall("GET",getUsersApi,"","header")
            setUser(response.data.users)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }
    useEffect(() => {
        getUsers();
    }, [])
    
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="card table-card">
                    <div className="card-body">
                        <h5 style={{padding:'10px'}} className='card-title'>Users</h5>
                        <div className="table-responsive">
                            <table className="table table-hover tbl-product">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User Name</th>
                                        <th>E-mail</th>
                                        <th>Create Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.length> 0 ? (
                                        user.map((user, index) => (

                                            <tr key={user?._id}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{new Date(user.createdAt).toLocaleString()}</td>

                                            </tr>
                                        ))
                                    ):(
                                        <tr>
                                                <td colSpan="10" className="text-center">
                                                    No orders available.
                                                </td>
                                            </tr>

                                    )}
                                    
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Users
