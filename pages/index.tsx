import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Hoge } from '../components/atoms/hoge';
import { Thumbnail } from '../components/molecules/thumbnail';
import { useAppDispatch } from '../store';
import { useSelector, shallowEqual } from 'react-redux';
// import { eventsSelector } from '../store/events';
import { useEffect } from 'react';
import { Events } from '../components/molecules/events';
import { PostEvents } from '../components/molecules/post-events';

const Home: NextPage = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(listEvents());
  // }, [dispatch]);
  // const events = useSelector(eventsSelector, shallowEqual);

  return (
    <>
      <Thumbnail title={'hoge'} outline={'fuga'} />
    </>
  );
};

export default Home;
