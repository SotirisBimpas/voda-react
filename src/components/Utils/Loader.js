import React from 'react';
import styles from './Loader.module.css';

export default function Loader () {
  const { loader } = styles;
  return <div className={loader} />
}