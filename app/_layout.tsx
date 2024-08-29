import { Slot } from 'expo-router'
import '../global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

export default function layout(){
    return(
        <GluestackUIProvider>
            <Slot />
        </GluestackUIProvider>
    )
}