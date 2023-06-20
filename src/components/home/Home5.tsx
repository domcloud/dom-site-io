import React from "react";
import FaHdd from '@fortawesome/fontawesome-free/svgs/solid/hdd.svg';
import FaGlobe from '@fortawesome/fontawesome-free/svgs/solid/globe.svg';
import FaLock from '@fortawesome/fontawesome-free/svgs/solid/lock.svg';
export default function Home5() {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom text--center">
                Starter Features for you <span className="badge badge--primary">it's free</span>
            </h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaHdd />
                    </div>
                    <h2>Free Storage</h2>
                    <p>1.5 GB of storage free for up to 3 websites.</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaGlobe />
                    </div>
                    <h2>Free Domain</h2>
                    <p>
                        Built-in <code>*.domcloud.io</code> domain for free.
                    </p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaLock />
                    </div>
                    <h2>Free TLS Certificates</h2>
                    <p>
                        Automatically enable HTTPS with <b>Let's Encrypt</b>.
                    </p>
                </div>
            </div>
        </div>
    )
}