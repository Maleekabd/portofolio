import React from "react"

class Layout extends React.Component {

    render() {
            return (
                <div id="layout" className="border-t border-black mt-10 border-b p-5">
                    {this.props.children}
                </div>
            )
        }
    }

export default Layout;