<Window>
  <View>
    <Header textAlign='center'>
      My orders
    </Header>
    <Spacing size='md'/>
    
    <Card
      leftIcon='cart-outline'
      leftIconColor='red'
      title='Order 1'
      description='Order 1 description'
      descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
      rightIcon='right-next'
      rightIconColor='red'
      disabled={false}
    />
    <Spacing size="xxs" />

    <Card
      leftIcon='cart-outline'
      leftIconColor='red'
      title='Order 2'
      description='Order 2 description'
      descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
      rightIcon='right-next'
      rightIconColor='red'
      disabled={false}
    />
    <Spacing size="xxs" />
    
    <Card
      leftIcon='cart-outline'
      leftIconColor='red'
      title='Order 3'
      description='Order 3 description'
      descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
      rightIcon='right-next'
      rightIconColor='red'
      disabled={true}
    />
    <Spacing size="xxs" />


    <Spacing size="md" />
    <Button
      label={'Back'}
      type='secondary'
      onClick={this.goBack}
    />

  </View>
</Window>