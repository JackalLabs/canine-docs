import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ParticipateLogo from '../../static/img/card-images/noun-community-2119725.svg';
import BuilderLogo from '../../static/img/card-images/builders.svg';
import ProviderLogo from '../../static/img/card-images/noun-world-network-4749943.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="main-title">{siteConfig.title}</h1>
        <p className="main-subtitle">{siteConfig.tagline}</p>
          <Link
            className="button button--secondary button--lg margin-bottom--xl"
            to="/docs/intro">
            Get Started
          </Link>

          <div className='row margin-top--md'>
            
            <article className='col col--4'>
              <Link
                className="card main-card padding--lg margin-bottom--lg hero-card"
                to="/docs/developers/intro">
                <h2 className='no-margin card-title'>Developers</h2>
                <BuilderLogo className='card-image' />
              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="card main-card padding--lg margin-bottom--lg hero-card"
                to="/docs/nodes/providers/building">
                <h2 className='no-margin card-title'>Storage Providers</h2>
                <ProviderLogo className='card-image' />

              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="card main-card padding--lg margin-bottom--lg hero-card"
                to="/docs/contributors/join">
                <h2 className='no-margin card-title'>Community Members</h2>
                <ParticipateLogo className='card-image'></ParticipateLogo>
              </Link>
            </article>
          </div>
          <h2 className="component-heading">Featured Articles</h2>
          <div className='row margin-top--md'>
            <article className='col col--4'>
              <Link
                className="article"
                to="/docs/using-jackal/delegate">
                <h2>Staking and Liquidity</h2>
                <div>Learn how to earn yield on your JKL tokens</div>
              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="article"
                to="https://github.com/JackalLabs/canine-docs">
                <h2>Contribute</h2>
                <div>Maintain and improve the Jackal Documentation</div>
              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="article"
                to="/docs/nodes/nodes/installation">
                <h2>Become A Validator</h2>
                <div>Validate blocks on the network and earn $JKL as a reward.</div>
              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="article"
                to="/docs/nodes/nodes/testnet">
                <h2>Join the Testnet</h2>
                <div>Join the testnet to deploy your dApp & interact with Jackal for free.</div>
              </Link>
            </article>
            <article className='col col--4'>
              <Link
                className="article"
                to="/docs/nodes/providers/building">
                <h2>Become a Provider</h2>
                <div>Start storing data for the Jackal Network to ensure data security for Jackal users.</div>
              </Link>
            </article>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for the Jackal Ecosystem.">
      <HomepageHeader />
    </Layout>
  );
}
