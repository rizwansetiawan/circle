import { FormEvent, useState } from 'react'
// import Layoute from './Layoute'
// import LayouteRight from './LayoutRight'
import { Avatar, Box, Button, Container, FormControl, Input, Text, } from '@chakra-ui/react'
import { SET_FOLLOWERS } from '../stores/rootReducer'
import { useDispatch } from 'react-redux'
import { BiSearch } from "react-icons/bi";
import { API } from '@/libs/api'
import { IFollow } from '@/interfaces/follow'


const Search = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState<IFollow[]>([])
  const dispatch = useDispatch()


  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const datash = await API.get(`/search?q=${search}`)
    setSearchResult(datash.data)
    console.log(datash.data)
  }

  const handleFollower = async (id: number, followeduserId: number, isFollowed: boolean) => {
    try {
      if (!isFollowed) {
        const response = await API.post(`/follow`, {
          followed_user_id: followeduserId
        })
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }))
        console.log("berhasil follow!", response.data);
      } else {
        const response = await API.delete(`/follow/${followeduserId}`);
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }));
        console.log("berhasil unfollow!", response.data);
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
      <Box display={'flex'} width={"1500px"} justifyContent={'space-between'}  >
        <Box color={'black'} flex={'0,5'}  >
          {/* <Layoute /> */}
        </Box>
        <Box>

          <Box width={'80%'}   mt={10}>
            <form onSubmit={handleSearch}>
              <Box display={'flex'} gap={10}>
                <FormControl >
                  <Input type='text'padding={5} borderRadius={'10px'} width={'300px'} name='search' onChange={(e) => setSearch(e.target.value)} placeholder='search' />
                </FormControl>

                <FormControl >
                  <Button type='submit'marginLeft={'10px'}> <BiSearch/></Button>
                </FormControl>
              </Box>
            </form>


          </Box>
          <Box>
            {searchResult.map((foll) => (
              <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={foll.id}>
                <Box display={'flex'} padding={"10px"}>
                  <Avatar
                    width={'40px'}
                    height={'40px'}
                    src={`${foll.picture}`}
                    css={{
                      border: '2px solid white',
                    }}
                    name={foll.full_name}
                  />
                  <Box marginX={'10px'}>
                    <Text fontSize={'15px'}>{foll.full_name}</Text>
                    <Text fontSize={'12px'} color={'gray.500'}>@{foll.username}</Text>
                  </Box>

                </Box>
                <Box marginRight={'5px'} marginTop={"15px"}>
                  <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(foll.id, foll.user_id, foll.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {foll.is_followed ? 'Unfollow' : 'Follow'}</Button>
                </Box>
              </Box>
            ))}
          </Box>

        </Box>
        <Box flex={'0.5'}>
          {/* <LayouteRight /> */}
        </Box>
      </Box>

    </Container>
  )
}

export default Search