import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = ()=>{
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return<View style={styles.backgroundView}>
        <Text>Testando essa merda mais uma vez</Text>
        <Button
            onPress={addBlogPost} 
            title= "Adicione 1 post"/>
        <FlatList
            data={state}
            keyExtractor={(blogPost)=> blogPost.title}
            renderItem={({item})=>{
                return(
                    <View style={styles.view}>
                        <Text style={styles.text} >{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                            <Feather name="trash-2" style={styles.feather}/>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    </View>
    
}

const styles = StyleSheet.create({

    backgroundView:{
        flex: 1
    },

    view:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth:2,
        marginBottom: -2,
        justifyContent: 'space-between',
        padding: 15
    },
    feather: {
        fontSize:20
    },
    text:{
        fontSize: 20
    }

})

export default IndexScreen