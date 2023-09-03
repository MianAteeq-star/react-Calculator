import { Input } from 'antd'
import React, { useState } from 'react'

export default function Calculator() {
    const [state, setState] = useState('')
    const handleChange = e => setState(s => (state + e.target.value))



    return (
        <>


            <div className="container-fluid cont ">
                <div className="row">
                    <div className="col mb-0">

                        <div className="card shadow p-3 p-md-4  text-center">
                            <h1 className='mb-4 text-secondary'>Calculator</h1>


                            <Input type='text' className='mb-3 input p-3  p-md-2 p-sm-4 text-warning fw-3' value={state} />
                            <div className='d-flex gap-2'>

                                <Input type='button' value={"AC"} name='ac' className='btn btn-primary ' onClick={e => setState(' ')} />
                                <Input type='button' value={"DEL"} name='del' onClick={e => { setState(state.toString().slice(0, -1)) }} />
                                <Input type='button' value={"."} name='.' onClick={handleChange} />
                                <Input type='button' value={"/"} name='/' onClick={handleChange} />
                            </div>
                            <div className='d-flex gap-2 my-2'>
                                <Input type='button' value={+ "7"} name='7' onClick={handleChange} />
                                <Input type='button' value={"8"} name='8' onClick={handleChange} />
                                <Input type='button' value={"9"} name='9' onClick={handleChange} />
                                <Input type='button' value={"*"} name='*' onClick={handleChange} />
                            </div>
                            <div className='d-flex gap-2'>
                                <Input type='button' value={"4"} name='4' onClick={handleChange} />
                                <Input type='button' value={"5"} name='5' onClick={handleChange} />
                                <Input type='button' value={"6"} name='6' onClick={handleChange} />
                                <Input type='button' value={"+"} name='+' onClick={handleChange} />
                            </div>
                            <div className='d-flex gap-2 my-2'>
                                <Input type='button' value={"1"} name='1' onClick={handleChange} />
                                <Input type='button' value={"2"} name='2' onClick={handleChange} />
                                <Input type='button' value={"3"} name='3' onClick={handleChange} />
                                <Input type='button' value={"-"} name='-' onClick={handleChange} />
                            </div>
                            <div className='d-flex gap-2'>
                                <Input type='button' value={"0"} name='0' onClick={handleChange} />
                                <Input type='button' value={"00"} name='00' onClick={handleChange} />
                                <Input type='button' value={"="} name='=' className='equal' onClick={e => { setState(eval(state)) }} />
                            </div>
                        </div>





                    </div>
                </div>
            </div>

        </>
    )
}

