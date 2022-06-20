import { useRoute } from '@react-navigation/native';
import { Image } from '@rneui/base';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { BaseText, Body, BoldText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';
import { DetailScreenRouteProp } from '../types/navigation';
import ProgressCircle from 'react-native-progress-circle';
import { Icon } from '@rneui/base';

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 200,
  },
});

const actors = [
  'AlizaBeth',
  'John Wick',
  'AlizaBeth',
  'John Wick',
  'AlizaBeth',
  'John Wick',
];

const creators = ['AlizaBeth', 'John Wick'];
const genres = ['hành động', 'tình cảm', 'hành động', 'tình cảm'];
const episodes = [
  {
    name: 'Dr. Jean Klocko',
    img: 'http://loremflickr.com/640/480/technics',
    subName: 'Tommie Erdman',
    duration: 62958,
    video_url: 'video_url 1',
    id: '1',
    movieId: '1',
  },
  {
    name: 'Maxine Adams',
    img: 'http://loremflickr.com/640/480/sports',
    subName: 'Janet Klocko',
    duration: 19849,
    video_url: 'video_url 2',
    id: '2',
    movieId: '2',
  },
  {
    name: 'Pam Sanford',
    img: 'http://loremflickr.com/640/480/food',
    subName: 'Leah Kautzer',
    duration: 98073,
    video_url: 'video_url 3',
    id: '3',
    movieId: '3',
  },
  {
    name: 'Myra Lowe',
    img: 'http://loremflickr.com/640/480/nature',
    subName: 'Marguerite Koss',
    duration: 85269,
    video_url: 'video_url 4',
    id: '4',
    movieId: '4',
  },
  {
    name: "Forrest O'Kon",
    img: 'http://loremflickr.com/640/480/business',
    subName: 'Dora Kassulke DVM',
    duration: 27715,
    video_url: 'video_url 5',
    id: '5',
    movieId: '5',
  },
  {
    name: 'Stephanie Reilly',
    img: 'http://loremflickr.com/640/480/food',
    subName: 'Rex Mills',
    duration: 92385,
    video_url: 'video_url 6',
    id: '6',
    movieId: '6',
  },
  {
    name: 'Chad Feeney',
    img: 'http://loremflickr.com/640/480/cats',
    subName: 'Louise Runolfsdottir',
    duration: 18291,
    video_url: 'video_url 7',
    id: '7',
    movieId: '1',
  },
  {
    name: 'Miss Dana Stroman',
    img: 'http://loremflickr.com/640/480/animals',
    subName: 'Laura Hills',
    duration: 86484,
    video_url: 'video_url 8',
    id: '8',
    movieId: '2',
  },
  {
    name: 'Rickey Marks',
    img: 'http://loremflickr.com/640/480/people',
    subName: 'Shari Gutmann',
    duration: 14653,
    video_url: 'video_url 9',
    id: '9',
    movieId: '3',
  },
];

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const theme = useTheme();
  const [data, setData] = useState<Movie>();

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await axios.get(
          `https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/movies/${route.params?.id}`
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovie();
  }, []);

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View style={{ position: 'relative' }}>
        <Image
          style={styles.bg}
          source={{ uri: data?.cover_img }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View style={{ marginTop: 15 }}>
          <BaseText
            style={{
              color: theme?.theme.textColor,
              fontSize: 25,
              marginTop: 15,
            }}
          >
            {data?.name}
          </BaseText>
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {data && (
              <ProgressCircle
                percent={data?.score}
                radius={36}
                borderWidth={7}
                color='#21cb77'
                shadowColor='#204529'
                bgColor='#081c22'
              >
                <BoldText style={{ fontSize: 14, color: 'white' }}>
                  {data.score}%
                </BoldText>
              </ProgressCircle>
            )}
            <View style={{ marginLeft: 10 }}>
              <BoldText style={{ fontSize: 14, color: 'white' }}>User</BoldText>
              <BoldText style={{ fontSize: 14, color: 'white' }}>
                Score
              </BoldText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Icon
                color={theme?.theme.iconColor}
                name='heart'
                type='ant-design'
              />
            </View>
            <View style={{ marginLeft: 35 }}>
              <Icon
                color={theme?.theme.iconColor}
                name='like1'
                type='ant-design'
              />
            </View>
            <View style={{ marginLeft: 35 }}>
              <Icon
                color={theme?.theme.iconColor}
                name='download'
                type='ant-design'
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: theme?.theme.subTextColor,
            marginTop: 20,
            marginBottom: 20,
          }}
        ></View>

        <View style={{ flexDirection: 'row' }}>
          <BaseText
            style={{
              flexBasis: 120,
              color: theme?.theme.textColor,
            }}
          >
            Thể loại:
          </BaseText>

          <View
            style={{
              flexBasis: 'auto',
              flexShrink: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {genres.map((item, i) => (
              <BaseText
                key={i}
                style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
              >
                {item}
                {i < genres.length - 1 ? ', ' : ''}
              </BaseText>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <BaseText
            style={{
              flexBasis: 120,
              color: theme?.theme.textColor,
            }}
          >
            Diễn viên:
          </BaseText>

          <View
            style={{
              flexBasis: 'auto',
              flexShrink: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {actors.map((item, i) => (
              <BaseText
                key={i}
                style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
              >
                {item}
                {i < actors.length - 1 ? ', ' : ''}
              </BaseText>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <BaseText
            style={{
              flexBasis: 120,
              color: theme?.theme.textColor,
            }}
          >
            Đạo diễn:
          </BaseText>

          <View
            style={{
              flexBasis: 'auto',
              flexShrink: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {creators.map((item, i) => (
              <BaseText
                key={i}
                style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
              >
                {item}
                {i < creators.length - 1 ? ', ' : ''}
              </BaseText>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <BaseText
            style={{
              flexBasis: 120,
              color: theme?.theme.textColor,
            }}
          >
            Số tập:
          </BaseText>

          <BaseText style={{ color: theme?.theme.subTextColor }}>
            {data?.eposides_count}
          </BaseText>
        </View>

        <BoldText style={{ marginTop: 40, color: theme?.theme.textColor }}>
          Danh sách tập
        </BoldText>

        <View style={{ marginTop: 15 }}>
          {episodes.map((item, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                marginBottom: 13,
              }}
            >
              <Image
                style={{
                  width: 130,
                  height: 80,
                }}
                source={{ uri: item.img }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <View style={{ marginLeft: 10, flexShrink: 1 }}>
                <BaseText
                  numberOfLines={1}
                  style={{ fontSize: 15, color: theme?.theme.textColor }}
                >
                  {item.name}
                </BaseText>
                <BaseText
                  numberOfLines={1}
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: theme?.theme.subTextColor,
                  }}
                >
                  {item.subName} - {item.duration} phút
                </BaseText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default DetailScreen;
