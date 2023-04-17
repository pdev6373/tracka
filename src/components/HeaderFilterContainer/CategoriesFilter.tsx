import React from 'react';
import { FlatList } from 'react-native';
import { Button, Text, Box, Icon } from 'native-base'
import { EvilIcons } from "@expo/vector-icons"


type CategoriesFilterProp = {
  categories: string[];
}

const CategoriesFilter = (props: CategoriesFilterProp) => {
  const { categories } = props;
    
    return (
      <Box flexDirection='row' ml={5}>
        <Button
        size={'sm'}
        paddingTop={1}
        paddingBottom={1}
        marginRight={3}
        marginBottom={3}
        borderRadius={8}
        variant='solid'
        borderColor='primary.500'
        _pressed={{
          background: 'primary.500'
        }}
        _text={{
          color: 'white.white',
          fontSize: 12
        }}
      >
        Categories
      </Button>
      
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <Button
            size={'sm'}
            paddingTop={1}
            paddingBottom={1}
            marginRight={3}
            marginBottom={3}
            borderRadius={8}
            variant='outline'
            borderColor='primary.500'
            _pressed={{
              background: 'white.white'
            }}
            _text={{
              color: 'primary.500',
              fontSize: 12
            }}
            endIcon={<Icon as={EvilIcons} name="close" size={4} />}
          >
            {item}
          </Button>
        )}
        keyExtractor={item => item}
      />
      </Box>
    );
}

export default CategoriesFilter;

