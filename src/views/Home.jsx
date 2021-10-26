<Window>
	<View>
    <View>
      <Header textAlign="center">Lives Catalog</Header>
      <Spacing size="md" />
      <Paragraph size="xs">With lives catalog you can choose a live to watch and buy selected products with special discount and cashback rates</Paragraph>
    </View>

    <View>
      <Card
        leftIcon='receipt-outline'
        leftIconColor='red'
        title='My Orders'
        description='See your orders statuses'
        descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
        rightIcon='right-next'
        rightIconColor='red'
        disabled={false}
        onClick={this.myOrders}
      />
      <Spacing size="md" />
    </View>

    <View>
      <Subtitle>Avaliable lives</Subtitle>
      <Spacing size="md" />
      <Carousel autoplay >
        <View>
          <Touchable onClick={this.bannerClick1}>
            <Illustration height={260} image={require('../assets/images/banner_camilla.jpg')} />
          </Touchable>
        </View>
        
        <View> 
          <Touchable onClick={this.bannerClick2}>
            <Illustration height={260} image={require('../assets/images/banner_juliette.jpg')} />
          </Touchable>
        </View>

        <View>
          <Touchable onClick={this.bannerClick3}>
            <Illustration height={260} image={require('../assets/images/banner_niver.jpg')} />
          </Touchable>
        </View>
      </Carousel>
    </View>

    <View>
      <Button label='How to buy' type='primary' onClick={this.HowToBuy}/>
    </View>

    
  </View>
</Window>
