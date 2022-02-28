import React from 'react'

export default function Maintenance() {
    return (
        <section className="w-100 bg-light">
            <div className="content">
                <div className="message text-dark">
                    <h1>Maintenance Mode</h1>
                    <img src="maintenance.webp" height={300} width={300} alt="" />
                    {/* <p>Stay tuned 👌</p> */}
                </div>
            </div>
        </section>
    )
}
