// a placeholder for our editor file.
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

// var Promise = require('bluebird');

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  text: 'hello world', // text is going to be the code the user inputs
		}
	}

	render () {
		return (
		  <div className="navbar navbar-default" role="navigation">
		    <div className="container">
		      <div className="navbar-header">
		        <div className="navbar-brand">
		          <a href="/" className="logo">
		          <img src="./pad_files/logo.png" alt="" /> 
		          </a>
		        </div>
		        <button className="navbar-toggle pull-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
		        <span className="sr-only">Toggle navigation</span>
		        <i className="fa fa-cog"></i>
		        </button>
		      </div>
		      
		      <div className="navbar-collapse collapse">
		        <form className="navbar-form navbar-search-form navbar-left">
		          <div className="form-group">
		            <input type="text" className="form-control navbar-search-field" placeholder="Type here for search..." />
		          </div>
		        </form>
		        <ul className="nav navbar-nav navbar-right">
		          <li className="divider"></li>
		          <li className="dropdown navbar-profile">
		            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" href="javascript:;">
		            <img src="./pad_files/avatar-6-sm.jpg" className="navbar-profile-avatar" alt="" />
		            <span className="visible-xs-inline">@lthai423 &nbsp;</span>
		            <i className="fa fa-caret-down"></i>
		            </a>
		            <ul className="dropdown-menu" role="menu">
		              <li>
		                <a href="#">
		                <i className="fa fa-user"></i>
		                &nbsp;&nbsp;My Profile
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                <i className="fa fa-dollar"></i>
		                &nbsp;&nbsp;Plans &amp; Billing
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                <i className="fa fa-cogs"></i>
		                &nbsp;&nbsp;Settings
		                </a>
		              </li>
		              <li className="divider"></li>
		              <li>
		                <a href="#">
		                <i className="fa fa-sign-out"></i>
		                &nbsp;&nbsp;Logout
		                </a>
		              </li>
		            </ul>
		          </li>
		        </ul>
		        <ul className="nav navbar-nav navbar-right">
		          <li className="dropdown">
		            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
		            Templates&nbsp;
		            <i className="fa fa-caret-down"></i>
		            </a>
		            <ul className="dropdown-menu mega-menu-2" role="menu">
		              <li>
		                <div className="mega-menu-content">
		                  <div className="mega-menu-col">
		                    <div className="demo-block">
		                      <a href="#" className="demo-launcher">
		                      <img src="./pad_files/theme-drop-admin-1.png" className="img-responsive" alt="" />
		                      View Admin Layout #1
		                      </a>
		                      <div className="demo-external">
		                        <a href="#" target="_blank"><small><i className="fa fa-external-link"></i>&nbsp;&nbsp;(Open in new tab)</small></a>
		                      </div>
		                    </div>
		                    
		                    <div className="demo-block">
		                      <a href="#" className="demo-launcher">
		                      <img src="./pad_files/theme-drop-landing.png" className="img-responsive" alt="" />
		                      View Frontend Template
		                      </a>
		                      <div className="demo-external">
		                        <a href="#" target="_blank"><small><i className="fa fa-external-link"></i>&nbsp;&nbsp;(Open in new tab)</small></a>
		                      </div>
		                    </div>
		                    
		                  </div>
		                  
		                  <div className="mega-menu-col">
		                    <div className="demo-block">
		                      <a href="#" className="demo-launcher">
		                      <img src="./pad_files/theme-drop-admin-2.png" className="img-responsive" alt="" />
		                      View Admin Layout #2
		                      </a>
		                      <div className="demo-external">
		                        <a href="#" target="_blank"><small><i className="fa fa-external-link"></i>&nbsp;&nbsp;(Open in new tab)</small></a>
		                      </div>
		                    </div>
		                    
		                    <div className="demo-block">
		                      <a href="#" className="demo-launcher">
		                      <img src="./pad_files/theme-drop-launch.png" className="img-responsive" alt="" />
		                      View Launch Template
		                      </a>
		                      <div className="demo-external">
		                        <a href="#" target="_blank"><small><i className="fa fa-external-link"></i>&nbsp;&nbsp;(Open in new tab)</small></a>
		                      </div>
		                    </div>
		                    
		                  </div>
		                  
		                </div>
		                
		              </li>
		            </ul>
		          </li>
		          <li className="navbar-divider"></li>
		          
		          <li className="dropdown navbar-notification">
		            <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
		            <i className="fa fa-bell navbar-notification-icon"></i>
		            <span className="visible-xs-inline">&nbsp;Notifications</span>
		            <b className="badge badge-primary">3</b>
		            </a>
		            <div className="dropdown-menu">
		              <div className="dropdown-header">&nbsp;Notifications</div>
		              <div className="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 225px;">
		                <div className="notification-list" style="overflow: hidden; width: auto; height: 225px;">
		                  <a href="#">
		                  <span className="notification-icon"><i className="fa fa-cloud-upload text-primary"></i></span>
		                  <span className="notification-title">Notification Title</span>
		                  <span className="notification-description">Praesent dictum nisl non est sagittis luctus.</span>
		                  <span className="notification-time">20 minutes ago</span>
		                  </a> 
		                  <a href="#">
		                  <span className="notification-icon"><i className="fa fa-ban text-secondary"></i></span>
		                  <span className="notification-title">Notification Title</span>
		                  <span className="notification-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</span>
		                  <span className="notification-time">20 minutes ago</span>
		                  </a> 
		                  <a href="#">
		                  <span className="notification-icon"><i className="fa fa-warning text-tertiary"></i></span>
		                  <span className="notification-title">Storage Space Almost Full!</span>
		                  <span className="notification-description">Praesent dictum nisl non est sagittis luctus.</span>
		                  <span className="notification-time">20 minutes ago</span>
		                  </a> 
		                  <a href="#">
		                  <span className="notification-icon"><i className="fa fa-ban text-danger"></i></span>
		                  <span className="notification-title">Sync Error</span>
		                  <span className="notification-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</span>
		                  <span className="notification-time">20 minutes ago</span>
		                  </a> 
		                </div>
		                <div className="slimScrollBar" style="background: rgb(136, 136, 136); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
		                <div className="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(153, 153, 153); opacity: 0.2; z-index: 90; right: 1px;"></div>
		              </div>
		              
		              <a href="#">View All Notifications</a>
		            </div>
		            
		          </li>
		          <li className="dropdown navbar-notification">
		            <a href="#" data-toggle="dropdown" data-hover="dropdown">
		            <i className="fa fa-envelope navbar-notification-icon"></i>
		            <span className="visible-xs-inline">&nbsp;Messages</span>
		            </a>
		            <div className="dropdown-menu">
		              <div className="dropdown-header">Messages</div>
		              <div className="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 225px;">
		                <div className="notification-list" style="overflow: hidden; width: auto; height: 225px;">
		                  <a href="#">
		                    <div className="notification-icon"><img src="./pad_files/avatar-3-md.jpg" alt="" /></div>
		                    <div className="notification-title">New Message</div>
		                    <div className="notification-description">Praesent dictum nisl non est sagittis luctus.</div>
		                    <div className="notification-time">20 minutes ago</div>
		                  </a>
		                  
		                  <a href="#">
		                    <div className="notification-icon"><img src="./pad_files/avatar-3-md.jpg" alt="" /></div>
		                    <div className="notification-title">New Message</div>
		                    <div className="notification-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
		                    <div className="notification-time">20 minutes ago</div>
		                  </a>
		                  
		                  <a href="#">
		                    <div className="notification-icon"><img src="./pad_files/avatar-4-md.jpg" alt="" /></div>
		                    <div className="notification-title">New Message</div>
		                    <div className="notification-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
		                    <div className="notification-time">20 minutes ago</div>
		                  </a>
		                  
		                  <a href="#">
		                    <div className="notification-icon"><img src="./pad_files/avatar-5-md.jpg" alt="" /></div>
		                    <div className="notification-title">New Message</div>
		                    <div className="notification-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
		                    <div className="notification-time">20 minutes ago</div>
		                  </a>
		                  
		                </div>
		                <div className="slimScrollBar" style="background: rgb(136, 136, 136); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
		                <div className="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(153, 153, 153); opacity: 0.2; z-index: 90; right: 1px;"></div>
		              </div>
		              
		              <a href="#">View All Messages</a>
		            </div>
		            
		          </li>
		          <li className="dropdown navbar-notification empty">
		            <a href="#" data-toggle="dropdown" data-hover="dropdown">
		            <i className="fa fa-warning navbar-notification-icon"></i>
		            <span className="visible-xs-inline">&nbsp;&nbsp;Alerts</span>
		            </a>
		            <div className="dropdown-menu">
		              <div className="dropdown-header">Alerts</div>
		              <div className="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 225px;">
		                <div className="notification-list" style="overflow: hidden; width: auto; height: 225px;">
		                  <h4 className="notification-empty-title">No alerts here.</h4>
		                  <p className="notification-empty-text">Check out what other makers are doing on Explore!</p>
		                </div>
		                <div className="slimScrollBar" style="background: rgb(136, 136, 136); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
		                <div className="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(153, 153, 153); opacity: 0.2; z-index: 90; right: 1px;"></div>
		              </div>
		              
		              <a href="#">View All Alerts</a>
		            </div>
		            
		          </li>
		          <li className="navbar-divider"></li>
		          
		        </ul>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Navbar;
