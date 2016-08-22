import React from 'react'
import { Layout, Card, Checkbox, FloatingInput, IconSearch } from 'components'
import { colors } from 'styles'

const Test = (props) => 
    <Layout>
        <FloatingInput
            style={{ 
                width: '296px',
                marginBottom: '50px' 
            }}
            leftComponent={<IconSearch style={{ padding: '0 14px 0 20px' }} color={colors.font.lightGray} />}
            placeholder="Search Notes" 
        />

        <Card
            title="UI Design Tools"
            color={colors.background.blue}
            image="http://www.carlsbad-convention.cz/images/gastronomie/04.jpg"
            elevation={2}
        >
            <Checkbox>Photoshop</Checkbox>
            <Checkbox>Inkscape</Checkbox>
        </Card>
    </Layout>

export {
    Test
}
