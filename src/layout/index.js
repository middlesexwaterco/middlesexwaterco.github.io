import React from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';
import {createApp} from '@phenomic/preset-react-app/lib/client';
import Head from 'react-helmet';
import { StyleSheet } from "react-primitives";

function sectionUrl(name) {
	return "/" + name;
}

export type HtmlPropsType = {
	body: React$Element<*>,
	state?: React$Element<*>,
	script: React$Element<*>
};

export const Html = (props: HtmlPropsType) => {
	const helmet = Head.renderStatic();
	// https://github.com/necolas/react-native-web/issues/504
	const styles = StyleSheet.renderToString().split("</style>");
	const staticStyles = styles[0].replace(
			'<style id="react-native-stylesheet-static">',
			""
	);
	const mainStyles = styles[1].replace(
			'<style id="react-native-stylesheet">',
			""
	);
	return (
			<html {...helmet.htmlAttributes.toComponent()}>
			<head>
				{helmet.base.toComponent()}
				{helmet.title.toComponent()}
				{helmet.meta.toComponent()}
				<link rel="stylesheet" href="/styles.css" />
				<style id="react-native-stylesheet-static">{staticStyles}</style>
				<style id="react-native-stylesheet-static">{mainStyles}</style>
				{helmet.link.toComponent()}
				{helmet.style.toComponent()}
				{helmet.script.toComponent()}
				{helmet.noscript.toComponent()}
			</head>
			<body {...helmet.bodyAttributes.toComponent()}>
			{props.body}
			{props.state}
			{props.script}
			</body>
			</html>
	);
};

export const Layout = ({children}) => <div>
	<Top />
	{children}
	<Footer />
</div>;

const Top = () => <div className="container-fluid top" style={{marginBottom: '15px'}}>
	<Head>

	</Head>
	<div className="container">
		<div className="row">
			<div className="col-md-9 text-xs-center text-md-left">
				<nav className="nav nav-inline toplinks">
					<Link className="nav-link" href="">Investors</Link>
					<Link className="nav-link" to={sectionUrl('developers')}>Developers &amp; Partners</Link>
					<Link className="nav-link" href="">Contact Us</Link>
					<span className="nav-link">
						<input type="text" name="q"/>
						<button type="submit">Search</button>
					</span>
				</nav>
			</div>
			<div className="col-md-3 dropdown text-md-right text-xs-center">
				<button type="button" className="btn btn-info dropdown-toggle contact-top" id="locationDropdown"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{/*@if (Session != null && Session["location"] != null)*/}
					{/*{*/}
					{/*<span>@Session["location"]</span>*/}
					{/*}*/}
					{/*else*/}
					{/*{*/}
					{/*<span>Select Company</span>*/}
					{/*}*/}
				</button>
				{/*<div className="dropdown-menu text-md-right" aria-labelledby="locationDropdown">*/}
				{/*@foreach (Dinamico.Models.ContentPage x in N2.Content.Search.Items.Where(f => f.Title == "Top Nav").First().Children)*/}
				{/*{*/}
				{/*<Link className="dropdown-item" href="@x.GetDetail("Destination")">@x.Title</Link>*/}
				{/*}*/}
				{/*@foreach (var x in Content.Traverse.StartPage.GetChild("family").Children.Where(f => f.IsPage))*/}
				{/*{*/}
				{/*<li>*/}
				{/*<Link className="btn font-weight-bold span12" href="@x.Url">@x.Title</Link>*/}
				{/*@if (x.Details["Summary"] != null && !string.IsNullOrWhiteSpace(x.Details["Summary"].StringValue))*/}
				{/*{ <br /><small>@(x.Details["Summary"].StringValue)</small> }*/}
				{/*</li>*/}
				{/*}*/}
				{/*</div>*/}
			</div>
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="col-md-3">
					<Link href="~/"><img className="m-y-2" src={require('./msw-logo-blue-alpha.svg')}/></Link>
				</div>
				<nav className="text-md-right navbar navbar-light col-md-9">
					<button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse"
									data-target="#collapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false"
									aria-label="Toggle navigation">
						&#9776; Main Menu
					</button>
					<ul className="nav navbar-nav text-md-center collapse navbar-toggleable-sm" id="collapsingNavbar">
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" href="~/about-us">
								<span>About Us</span>
							</Link>
						</li>
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" to={sectionUrl('tips-tools')}>
								<span>Tips &amp Tools</span>
							</Link>
						</li>
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" to={sectionUrl('newsroom')}>
								<span>News Room</span>
							</Link>
						</li>
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" to={sectionUrl('careers')}>
								<span>Careers</span>
							</Link>
						</li>
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" to={sectionUrl('alerts')}>
								<span>Alerts</span>
							</Link>
						</li>
						<li className="navItem col-md-2 p-y-1">
							<Link className="nav-link" href="#">
								<span>My Account</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>;

const Footer = () => {
	return <footer>
		<div className="container-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-3 p-y-3">
						<h5>Contact</h5>
						<address>
							Middlesex Water Company <br/>
							1500 Ronson Rd. Iselin, NJ 08830
						</address>
						<ul>
							<li><Link to={sectionUrl('pay-my-bill')}>Pay My Bill</Link></li>
							<li><Link to={sectionUrl('directalert')}>Register for DirectAlert</Link></li>
							<li><Link to={sectionUrl('emergency-home')}>Emergency Repair Plans</Link></li>
						</ul>
					</div>
					<div className="col-md-3 p-y-3">
						<h5>About Us</h5>
						<ul>
							<li><Link to={sectionUrl('profile')}>Corporate Profile</Link></li>
							<li><Link to={sectionUrl('leadership')}>Leadership Team</Link></li>
							<li><Link to={sectionUrl('services')}>Our Services</Link></li>
							<li><Link to={sectionUrl('tomorrow')}>Water for Tomorrow</Link></li>
							<li><Link to={sectionUrl('responsibility')}>Corporate Responsibility</Link></li>
							<li><Link to={sectionUrl('diversity')}>Diversity</Link></li>
							<li><Link to={sectionUrl('developers')}>Developers and Partners</Link></li>
						</ul>
					</div>
					<div className="col-md-3 p-y-3">
						<h5>Customer Care</h5>
						<ul>
							<li><Link to={sectionUrl('pay-my-bill')}>Pay My Bill</Link></li>
							<li><Link to={sectionUrl('customer-care')}>Report a Water Emergency</Link></li>
							<li><Link to={sectionUrl('change-of-address')}>Change of Address</Link></li>
							<li><Link to={sectionUrl('transfer')}>Start, Stop, Transfer Service</Link></li>
							<li><Link to={sectionUrl('rates')}>Rates/Tariffs</Link></li>
							<li><Link to={sectionUrl('quality')}>Water Quality Reports</Link></li>
							<li><Link to={sectionUrl('tips')}>Tips and Tools</Link></li>
						</ul>
					</div>
					<div className="col-md-3 p-y-3">
						<h5>News Room</h5>
						<ul>
							<li><Link to={sectionUrl('press')}>News Releases</Link></li>
							<li><Link to={sectionUrl('blog')}>FreeFlow - MWC Blog</Link></li>
							<li><Link to={sectionUrl('fact')}>Fact Sheet</Link></li>
							<li><Link to={sectionUrl('publications')}>Publications</Link></li>
							<li><Link to={sectionUrl('alerts')}>Alerts</Link></li>
							<li><Link to={sectionUrl('media')}>Media Library</Link></li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-5">
						<p><Link to="~/"><img className="footer-logo"
																	src="~/Dinamico/Themes/MW_2016/Content/msw-logo-white-alpha.svg"/></Link></p>
						<p>
							Copyright &copy; 2017 Middlesex Water Company <br />
							All rights reserved.
							<Link to="@legalNoticeUrl">Legal Notice</Link>,
							<Link to="@privacyUrl">Privacy</Link><br />
							The Middlesex Water family of companies are proud to be an equal opportunity employer. MC/D/V.
						</p>
					</div>
					<div className="col-xs-12 col-sm-3 col-sm-push-4">
						<ul>
							<li><Link to={sectionUrl('investors')}>Investors</Link></li>
							<li><Link to={sectionUrl('careers')}>Careers</Link></li>
							<li><Link to="#">Back to Top</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>;
}