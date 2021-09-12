import React from 'react';
import { Text, TouchableWithoutFeedback, View, UIManager, LayoutAnimation, Platform, StyleSheet } from 'react-native';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default function({ title, children }) {
  const [expanded, setExpanded] = React.useState(false);
  
  return (
    <View>
        <View>
            <TouchableWithoutFeedback
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setExpanded(!expanded);
                }}>
                <View style={{ ...styles.titleContainer, 
                                borderBottomLeftRadius: (!expanded ? 5 : 0), 
                                borderBottomRightRadius: (!expanded ? 5 : 0) }} >
                    <Text style={styles.title}>{title}</Text>
                    
                    <Text style={styles.toggleIcon}/>{expanded ? '═' : '╪'}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        {expanded && 
            <View style={styles.panelContainer}>
                {children}
            </View>
        }
    </View>               
  );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        fontWeight: '700'
    },
    toggleIcon: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 7.5,
        right: 10
    },
    panelContainer: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
});
