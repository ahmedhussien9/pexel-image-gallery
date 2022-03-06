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
import Loader from '../components/Loader/Loader';

type Props = {
  photos: IPhoto[]
}

const IndexPage = ({ photos }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [item, setItem] = useState<IPhoto>();
  const closeModal = () => setShow(false);
  const selectedItem = (item: IPhoto): void => {
    setItem(item);
    setShow(true);
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Container >
        <PageHeader title='Stockholm Photo Gallery' description='This is a description for the image gallery page'></PageHeader>
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

export async function getServerSideProps(context) {
  const ImageGalleryData = await GetImageGalleryApi();
  const photosData = ImageGalleryData['photos'];
  return {
    props: {
      photos: photosData
    },
  };
}
export default IndexPage;
