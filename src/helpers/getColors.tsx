import ImageColors from 'react-native-image-colors'



export const getColors = async (uri: string) => {
  
  let primary;
  let secondary;

  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: false,
    key: 'unique_key',
  })

  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant;
      secondary = result.lightVibrant;
      break
    case 'ios':
      // iOS result properties
      primary = result.primary;
      secondary = result.secondary;
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return [
    primary,
    secondary
  ]
}