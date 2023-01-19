import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>申し込みフォーム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack>
          <Container maxW="container.md" bg="gray.200" color="black.600" p="4">
            <Box mb="3">
              <Text fontSize={['xl', '3xl']} fontWeight="bold" mb="2">
                All Japan Competition 2022-2023 WEST
                <br />
                {'<12月24日（土）>'}
                <br />
                南海波切ホール（大阪）
                <br />
                チーム登録フォーム
              </Text>
              <Text fontSize={'x-small'}>
                Miss Dance Drill Team Int'l Japan
              </Text>
            </Box>

            <Box bg="white" border="1px" borderColor="gray.300" px="3" py="8">
              <Text borderBottom="1px" borderColor="gray.300" fontSize="sm">
                ●複数部門に出場の場合、1演技ごとに送信が必要となります。
              </Text>

              <VStack px="1" py="2">
                <VStack gap="2" mb="4">
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">大会選択</FormLabel>
                    <Select placeholder="出場大会を選択">
                      <option>選択１</option>
                      <option>選択２</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">編成部門</FormLabel>
                    <Flex gap="1">
                      <Select placeholder="出場編成を選択">
                        <option>選択１</option>
                        <option>選択２</option>
                      </Select>
                      <Select placeholder="出場部門を選択">
                        <option>選択１</option>
                        <option>選択２</option>
                      </Select>
                    </Flex>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">団体名</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">チーム名</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">氏名（連絡担当者）</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">
                      フリガナ（連絡担当者）
                    </FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">メールアドレス</FormLabel>
                    <FormHelperText>
                      ※事務局（@dancedrilljapan.com）からのPCメールおよび添付ファイルが受け取れるアドレスに限ります。
                    </FormHelperText>
                    <FormHelperText mb="2" mt="0">
                      ※携帯キャリアのアドレスはご遠慮ください。
                    </FormHelperText>
                    <Input type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">
                      メールアドレス（確認のためもう一度）
                    </FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">
                      電話番号（連絡担当者）
                    </FormLabel>
                    <Flex gap="1" alignItems="center">
                      <Input type="tel" />-
                      <Input type="tel" />-
                      <Input type="tel" />
                    </Flex>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">送信確認</FormLabel>
                    <FormHelperText>
                      ・このフォームはAll Japan Competition 2022-2023 WEST
                      12/24（土） Challenge Cupのチーム登録フォームです。
                    </FormHelperText>
                    <FormHelperText mt="0">
                      ・チーム登録後の内容の変更はできません。
                    </FormHelperText>
                    <FormHelperText mt="0">
                      ・同一内容のエントリーを複数人で行った場合、同一団体からのすべてのエントリーを無効とします。
                    </FormHelperText>
                    <FormHelperText mb="2" mt="0">
                      ・上記送信内容を確認したらチェックを入れてください。
                    </FormHelperText>
                    <Flex
                      alignItems="center"
                      border="1px"
                      borderColor="gray.300"
                      p="2"
                    >
                      <Checkbox />
                    </Flex>
                  </FormControl>
                </VStack>

                <Button mt={4} colorScheme="teal" type="submit">
                  確認画面へ
                </Button>
              </VStack>
            </Box>
            <Text fontSize="x-small" textAlign="center" mt="2">
              Copyright &copy; 2022 NPO Miss Dance Drill Team Int'l Japan. All
              Rights Reserved.
            </Text>
          </Container>
        </VStack>
      </main>
    </>
  );
}
