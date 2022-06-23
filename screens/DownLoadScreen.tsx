import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { WatchScreenNavigationProp } from '../types/navigation';

const data = [
  {
    name: 'Dr. Jean Klocko',
    img: 'http://loremflickr.com/640/480/technics',
    subName: 'Tommie Erdman',
    duration: 62958,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '1',
    movieId: '1',
  },
  {
    name: 'Maxine Adams',
    img: 'http://loremflickr.com/640/480/sports',
    subName: 'Janet Klocko',
    duration: 19849,
    video_url:
      'https://scontent.fhan4-2.fna.fbcdn.net/v/t39.25447-2/10000000_310083287855833_8226337548511419103_n.mp4?_nc_cat=102&vs=c81992de2a3811f9&_nc_vs=HBksFQAYJEdJQ1dtQURaTWpua0JCb0JBTjhhZTFWcTBpbHlibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDVm1SY01NREFFQU50TkptT3oySk12YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmgqKg3JiP%2BwEVAigDQzNlGAt2dHNfcHJldmlldxwXQJYwWBBiTdMYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzczMTU4MDc3Nzk5NDYxNRJvZW1fdmlkZW9fYXNzZXRfaWQPNTg0ODk5MjI5NjQ0MjQ2FW9lbV92aWRlb19yZXNvdXJjZV9pZA81NTIyMTU4NTMxNDAwOTccb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA81OTAzMDMxOTg5ODQyNzYOdnRzX3JlcXVlc3RfaWQAJQIcACXEARsHiAFzBDk5OTgCY2QKMjAyMi0wNi0wNQNyY2IBMANhcHAFVmlkZW8CY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCDE0MjAuMDYzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-7&_nc_sid=e65b19&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=mf9BZ5c6MVoAX_JsgA0&_nc_ht=video-lax3-1.xx&oh=00_AT-VJYDXwPX5ynUAA3uw-7VZOn8g67Lqy-WzfPdgqC0nIA&oe=62B65A77&_nc_rid=363399427866324',
    id: '2',
    movieId: '1',
  },
  {
    name: 'Pam Sanford',
    img: 'http://loremflickr.com/640/480/food',
    subName: 'Leah Kautzer',
    duration: 98073,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '3',
    movieId: '2',
  },
  {
    name: 'Myra Lowe',
    img: 'http://loremflickr.com/640/480/nature',
    subName: 'Marguerite Koss',
    duration: 85269,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '4',
    movieId: '2',
  },
  {
    name: "Forrest O'Kon",
    img: 'http://loremflickr.com/640/480/business',
    subName: 'Dora Kassulke DVM',
    duration: 27715,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '5',
    movieId: '1',
  },
  {
    name: 'Stephanie Reilly',
    img: 'http://loremflickr.com/640/480/food',
    subName: 'Rex Mills',
    duration: 92385,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '6',
    movieId: '1',
  },
  {
    name: 'Chad Feeney',
    img: 'http://loremflickr.com/640/480/cats',
    subName: 'Louise Runolfsdottir',
    duration: 18291,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '7',
    movieId: '1',
  },
  {
    name: 'Miss Dana Stroman',
    img: 'http://loremflickr.com/640/480/animals',
    subName: 'Laura Hills',
    duration: 86484,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '8',
    movieId: '2',
  },
  {
    name: 'Rickey Marks',
    img: 'http://loremflickr.com/640/480/people',
    subName: 'Shari Gutmann',
    duration: 14653,
    video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    id: '9',
    movieId: '2',
  },
];

const DownLoadScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<WatchScreenNavigationProp>();

  const handlePress = (id: string, title: string) => {
    navigation.navigate('Watch', { id, title });
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        {data?.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: 'row',
              marginBottom: 13,
            }}
            onPress={() => handlePress(item.id, item.name)}
          >
            <Image
              style={{
                width: 160,
                height: 90,
              }}
              source={{ uri: item.img }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{ marginLeft: 15, flexShrink: 1 }}>
              <BaseText
                numberOfLines={2}
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
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
};

export default DownLoadScreen;
