import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import {
    IconButton,
    TouchableRipple,
    Card,
    Avatar,
    Title,
    Paragraph,
    Button
} from 'react-native-paper';
import LottieView from 'lottie-react-native'

export const MainPanel = () => {
    const [iconData, setIconData] = React.useState(require("./../assets/icon-data.json"))
    let numRow = iconData.length % 4 === 0 ? iconData.length / 4 : Math.floor(iconData.length / 4) + 1
    var listItem = []
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    for (let i = 0; i < numRow; i++) {
        let pagingList = []
        if (i === numRow - 1) {
            pagingList = iconData.slice(i * 4, iconData.length)
        }
        else {
            pagingList = iconData.slice(i * 4, i * 4 + 4)
        }
        const test = require('./../assets/14211-graphics-card.json')
        listItem.push(
            <View style={{ flexDirection: "row" }} key={i}>
                {pagingList.map(item => (
                    <TouchableRipple onPress={() => { iconButtonPress(item.IconKey) }} key={item.IconKey} style={{ marginLeft: 15, marginRight: 15 }}>
                        <View style={styles.chipButton}>
                            <IconButton
                                icon={({size, color})=>(
                                    <LottieView source={test} autoPlay loop style={{width: size, height: size}} />
                                )}
                                size={40}
                                color="orange"
                                style={styles.chipButton}
                            />
                            <Text style={{ color: "gray" }}>{item.TextName}</Text>
                        </View>
                    </TouchableRipple>
                ))}
            </View>
        )
    }
    const iconButtonPress = (val) => { alert(val) }
    return (
        <View>
            <View style={{ flexDirection: "column" }}>
                {listItem}
            </View>
            <View style={{ flexDirection: "row", padding: 15 }}>
                <Text style={{ color: "gray", fontSize: 25 }}>Top Today</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 15 }}>
                <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
                    <Card style={styles.cardItem}>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chipButton: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    cardItem: {
        width: 300,
        marginRight: 30
    }
})