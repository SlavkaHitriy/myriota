import { Box, Button, IconButton, Stack } from '@mui/material';
import SliderArrowIcon from '@assets/icons/slider-arrow.svg';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import imageMain from '@assets/images/equipment_main.webp';
import image1 from '@assets/images/equipment_1.webp';
import image2 from '@assets/images/equipment_2.webp';
import image3 from '@assets/images/equipment_3.webp';
import image4 from '@assets/images/equipment_4.webp';
import image5 from '@assets/images/equipment_5.webp';
import image6 from '@assets/images/equipment_6.webp';
import image7 from '@assets/images/equipment_7.webp';
import { Map } from '@pages/RigView/components/Map';

interface IImageSlide {
  id: number;
  imageUrl: string;
}

interface IMapSlide {
  id: number;
  component: ReactNode;
}

const testImagesSlides: IImageSlide[] = [
  {
    id: 1,
    imageUrl: imageMain
  },
  {
    id: 2,
    imageUrl: image1
  },
  {
    id: 3,
    imageUrl: image2
  },
  {
    id: 4,
    imageUrl: image3
  },
  {
    id: 5,
    imageUrl: image4
  },
  {
    id: 6,
    imageUrl: image5
  },
  {
    id: 7,
    imageUrl: image6
  },
  {
    id: 8,
    imageUrl: image7
  }
];

const mapsItems: IMapSlide[] = [
  {
    id: 1,
    component: <Map />
  },
  {
    id: 2,
    component: <Map />
  },
  {
    id: 3,
    component: <Map />
  },
  {
    id: 4,
    component: <Map />
  }
];

interface ISliderProps {
  withMaps?: boolean;
}

export const Slider: FC<ISliderProps> = ({ withMaps }) => {
  const testSlides = useMemo(() => (withMaps ? mapsItems : testImagesSlides), [withMaps]);
  const [currentSlide, setCurrentSlide] = useState(testSlides[0].id);

  const paginationItems = useMemo(() => {
    const start = currentSlide === testSlides.length ? testSlides.length - 4 : Math.max(0, currentSlide - 3);
    const end = Math.min(testSlides.length, start + 4);
    const items = testSlides.slice(start, end);

    return items.map((slide) => ({
      id: slide.id,
      isActive: slide.id === currentSlide,
      onClick: () => setCurrentSlide(slide.id)
    }));
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(testSlides[0].id);
  }, [testSlides]);

  return (
    <>
      <Stack flex={1} overflow={'hidden'} position={'relative'}>
        {!withMaps &&
          (testSlides as IImageSlide[]).map((slide) => (
            <Box
              key={`slide-${slide.id}`}
              src={slide.imageUrl}
              component={'img'}
              alt={'rig'}
              sx={{
                position: 'absolute',
                width: '100%',
                objectFit: 'contain',
                height: '100%',
                top: 0,
                left: 0,
                opacity: slide.id === currentSlide ? 1 : 0
              }}
            />
          ))}
        {withMaps &&
          (testSlides as IMapSlide[]).map(
            (slide) =>
              slide.id === currentSlide && (
                <Box
                  sx={{
                    border: '4px solid #E7E7E7'
                  }}
                  width={'100%'}
                  key={`slide-${slide.id}`}
                  borderRadius={'24px'}
                  overflow={'hidden'}
                  flex={1}
                >
                  {slide.component}
                </Box>
              )
          )}
      </Stack>
      <Stack direction={'row'} mt={'auto'} alignSelf={'flex-end'} gap={'6px'} flexShrink={0}>
        {currentSlide !== 1 && (
          <IconButton
            sx={{
              width: '36px',
              height: '36px',
              transform: 'rotate(180deg)'
            }}
            disabled={currentSlide === 1}
            onClick={() => {
              setCurrentSlide((prev) => prev - 1);
            }}
          >
            <SliderArrowIcon />
          </IconButton>
        )}
        {paginationItems.map((slide, index) => (
          <Button
            key={`slide-pagination-${index}`}
            sx={(theme) => ({
              height: '36px',
              width: '73px',
              padding: '8px 22px',
              borderRadius: '24px',
              textTransform: 'capitalize',
              color: theme.palette.neutral[700],
              bgcolor: theme.palette.background.default,
              boxShadow: 'none !important',
              '&:hover': {
                bgcolor: theme.palette.background.hover
              },
              ...(slide.isActive && {
                color: theme.palette.common.white,
                bgcolor: theme.palette.neutral[700],
                pointerEvents: 'none'
              })
            })}
            onClick={slide.onClick}
          >
            {slide.id}
          </Button>
        ))}
        <IconButton
          sx={{
            width: '36px',
            height: '36px'
          }}
          disabled={currentSlide === testSlides.length}
          onClick={() => {
            setCurrentSlide((prev) => prev + 1);
          }}
        >
          <SliderArrowIcon />
        </IconButton>
      </Stack>
    </>
  );
};
