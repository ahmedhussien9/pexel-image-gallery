import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import { GetImageGalleryApi } from '../service/image-gallery-api';
import { IPhoto } from '../interfaces/photo.interface';
import {
  Layout,
  Container,
  PageHeader,
  List,
  PopupDialog,
} from '../components/index';
import { GetServerSideProps } from 'next';

type Props = {
  photos: IPhoto[]
}

const IndexPage = ({ photos }: Props) => {

  const [show, setShow] = useState<boolean>(false);

  const [item, setItem] = useState<IPhoto>();

  const closeModal = (): void => setShow(false);

  const selectedItem = (item: IPhoto): void => {
    setItem(item);
    setShow(true);
  }

  return (
    <Layout title="Home | Stockholm Photo Gallery" description='The Most amazing places to visit in stockholm'>
      <Container >
        <PageHeader title='Stockholm Photo Gallery' description='Amazing places to visit in stockholm'></PageHeader>
        <List items={photos} onClickItem={selectedItem}></List>
      </Container>
      {item && (
        <PopupDialog open={show} closeModal={closeModal}>
          <Image src={item.src.landscape} alt={item.alt} height={400} width={600} />
          <h2>{item.photographer}</h2>
        </PopupDialog>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ImageGalleryData = await GetImageGalleryApi();
  const photosData = ImageGalleryData['photos'];
  return {
    props: {
      photos: photosData
    },
  };
}


export default IndexPage;
