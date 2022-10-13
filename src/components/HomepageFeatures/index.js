import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Color Themes workbench',
    Svg: require('@site/static/img/colors.svg').default,
    description: (
      <>
        Create color themes for the included templates, check contrast, get inspiration on the color themes workbench.
      </>
    ),
  },
  {
    title: 'Iconography Workbench',
    Svg: require('@site/static/img/icon-workbench.svg').default,
    description: (
      <>
        Load your favourite Icon Sets, create your own Icon sets, save favorite Icons and create Theme Icongraphy's
      </>
    ),
  },
  {
    title: 'Font Workbench',
    Svg: require('@site/static/img/font-workbench.svg').default,
    description: (
      <>
        Select Fonts and Sizes to use in your app. Preview your fonts.
      </>
    ),
  },
  {
    title: 'App Themes Workbench',
    Svg: require('@site/static/img/app-themes-workbench.svg').default,
    description: (
      <>
        Create and manage themes, edit Icon Descriptions.
      </>
    ),
  },
  {
    title: 'Templates',
    Svg: require('@site/static/img/templates.svg').default,
    description: (
      <>
        Use the included Desktop, Tablet and Phone Templates to speed up your development.
      </>
    ),
  },
  {
  title: 'Export Power Fx',
  Svg: require('@site/static/img/export.svg').default,
  description: (
    <>
      Export your theme as Power Fx that can be copied directly into one of the included templates.
    </>
  ),
},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
