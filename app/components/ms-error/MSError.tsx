import { Text } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';


function MSError({children}:Readonly<PropsWithChildren>) {
    if(!children) return null;
  return (
    <Text color="red" as='p'>{children}</Text>
  )
}

export default MSError