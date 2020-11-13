import React from 'react';
import { useIntl } from 'umi';
import { Card, Descriptions } from 'antd';
import { queryFakerData } from './service';

const Demo: React.FC<any> = props => {
  const intl = useIntl();

  const [data, setData] = React.useState<any>({});

  React.useEffect(() => {
    (async function getData() {
      const resp = await queryFakerData();
      setData(resp.data);
    })();
  }, []);

  // const { data = {} } = props;
  const {
    address = {},
    commerce = {},
    company = {},
    database = {},
    date = {},
    fake = '',
    finance = {},
    git = {},
    hacker = {},
    helpers = {},
    image = {},
    internet = {},
    lorem = {},
    name = {},
    phone = {},
    random = {},
    system = {},
    time = {},
    unique = '',
    vehicle = {},
  } = data;

  return (
    <Card>
      <Descriptions title="address" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'address.zipCode' })} span={1}>
          {address.zipCode}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.zipCodeByState' })} span={1}>
          {address.zipCodeByState}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.city' })} span={1}>
          {address.city}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.cityPrefix' })} span={1}>
          {address.cityPrefix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.citySuffix' })} span={1}>
          {address.citySuffix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.streetName' })} span={1}>
          {address.streetName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.streetAddress' })} span={1}>
          {address.streetAddress}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.streetSuffix' })} span={1}>
          {address.streetSuffix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.streetPrefix' })} span={1}>
          {address.streetPrefix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.secondaryAddress' })} span={1}>
          {address.secondaryAddress}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.county' })} span={1}>
          {address.county}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.country' })} span={1}>
          {address.country}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.countryCode' })} span={1}>
          {address.countryCode}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.state' })} span={1}>
          {address.state}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.stateAbbr' })} span={1}>
          {address.stateAbbr}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.latitude' })} span={1}>
          {address.latitude}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.longitude' })} span={1}>
          {address.longitude}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.direction' })} span={1}>
          {address.direction}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.cardinalDirection' })} span={1}>
          {address.cardinalDirection}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'address.ordinalDirection' })} span={1}>
          {address.ordinalDirection}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({ id: 'address.nearbyGPSCoordinate' })}
          span={1}
        >
          {address.nearbyGPSCoordinate}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="commerce" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.color' })} span={1}>
          {commerce.color}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.department' })} span={1}>
          {commerce.department}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.productName' })} span={1}>
          {commerce.productName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.price' })} span={1}>
          {commerce.price}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.productAdjective' })} span={1}>
          {commerce.productAdjective}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.productMaterial' })} span={1}>
          {commerce.productMaterial}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'commerce.product' })} span={1}>
          {commerce.product}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({ id: 'commerce.productDescription' })}
          span={1}
        >
          {commerce.productDescription}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="company" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'company.suffixes' })} span={1}>
          {company.suffixes}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.companyName' })} span={1}>
          {company.companyName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.companySuffix' })} span={1}>
          {company.companySuffix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.catchPhrase' })} span={1}>
          {company.catchPhrase}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.bs' })} span={1}>
          {company.bs}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({ id: 'company.catchPhraseAdjective' })}
          span={1}
        >
          {company.catchPhraseAdjective}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({ id: 'company.catchPhraseDescriptor' })}
          span={1}
        >
          {company.catchPhraseDescriptor}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.catchPhraseNoun' })} span={1}>
          {company.catchPhraseNoun}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.bsAdjective' })} span={1}>
          {company.bsAdjective}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.bsBuzz' })} span={1}>
          {company.bsBuzz}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'company.bsNoun' })} span={1}>
          {company.bsNoun}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="database" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'database.column' })} span={1}>
          {database.column}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'database.type' })} span={1}>
          {database.type}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'database.collation' })} span={1}>
          {database.collation}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'database.engine' })} span={1}>
          {database.engine}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="date" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'date.past' })} span={1}>
          {date.past}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.future' })} span={1}>
          {date.future}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.between' })} span={1}>
          {date.between}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.recent' })} span={1}>
          {date.recent}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.soon' })} span={1}>
          {date.soon}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.month' })} span={1}>
          {date.month}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'date.weekday' })} span={1}>
          {date.weekday}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="fake" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'fake' })} span={1}>
          {fake}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="finance" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.account' })} span={1}>
          {finance.account}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.accountName' })} span={1}>
          {finance.accountName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.routingNumber' })} span={1}>
          {finance.routingNumber}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.mask' })} span={1}>
          {finance.mask}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.amount' })} span={1}>
          {finance.amount}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.transactionType' })} span={1}>
          {finance.transactionType}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.currencyCode' })} span={1}>
          {finance.currencyCode}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.currencyName' })} span={1}>
          {finance.currencyName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.currencySymbol' })} span={1}>
          {finance.currencySymbol}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.bitcoinAddress' })} span={1}>
          {finance.bitcoinAddress}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.litecoinAddress' })} span={1}>
          {finance.litecoinAddress}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.creditCardNumber' })} span={1}>
          {finance.creditCardNumber}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.creditCardCVV' })} span={1}>
          {finance.creditCardCVV}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.ethereumAddress' })} span={1}>
          {finance.ethereumAddress}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.iban' })} span={1}>
          {finance.iban}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'finance.bic' })} span={1}>
          {finance.bic}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="git" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'git.branch' })} span={1}>
          {git.branch}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'git.commitEntry' })} span={1}>
          {git.commitEntry}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'git.commitMessage' })} span={1}>
          {git.commitMessage}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'git.commitSha' })} span={1}>
          {git.commitSha}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'git.shortSha' })} span={1}>
          {git.shortSha}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="hacker" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.abbreviation' })} span={1}>
          {hacker.abbreviation}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.adjective' })} span={1}>
          {hacker.adjective}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.noun' })} span={1}>
          {hacker.noun}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.verb' })} span={1}>
          {hacker.verb}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.ingver' })} span={1}>
          {hacker.ingver}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'hacker.phrase' })} span={1}>
          {hacker.phrase}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="helpers" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.randomize' })} span={1}>
          {helpers.randomize}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.slugify' })} span={1}>
          {helpers.slugify}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({
            id: 'helpers.replaceSymbolWithNumber',
          })}
          span={1}
        >
          {helpers.replaceSymbolWithNumber}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.replaceSymbols' })} span={1}>
          {helpers.replaceSymbols}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({
            id: 'helpers.replaceCreditCardSymbols',
          })}
        >
          {helpers.replaceCreditCardSymbols}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.repeatString' })} span={1}>
          {helpers.repeatString}
        </Descriptions.Item>
        <Descriptions.Item
          label={intl.formatMessage({ id: 'helpers.regexpStyleStringParse' })}
          span={1}
        >
          {helpers.regexpStyleStringParse}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.shuffle' })} span={1}>
          {helpers.shuffle}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.mustache' })} span={1}>
          {helpers.mustache}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.createCard' })} span={1}>
          {JSON.stringify(helpers.createCard)}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.contextualCard' })} span={1}>
          {JSON.stringify(helpers.contextualCard)}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.userCard' })} span={1}>
          {JSON.stringify(helpers.userCard)}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'helpers.createTransaction' })} span={1}>
          {JSON.stringify(helpers.createTransaction)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="image" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'image.image' })} span={1}>
          {image.image}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.avatar' })} span={1}>
          {image.avatar}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.imageUrl' })} span={1}>
          {image.imageUrl}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.abstract' })} span={1}>
          {image.abstract}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.animals' })} span={1}>
          {image.animals}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.business' })} span={1}>
          {image.business}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.cats' })} span={1}>
          {image.cats}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.city' })} span={1}>
          {image.city}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.food' })} span={1}>
          {image.food}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.nightlife' })} span={1}>
          {image.nightlife}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.fashion' })} span={1}>
          {image.fashion}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.people' })} span={1}>
          {image.people}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.nature' })} span={1}>
          {image.nature}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.sports' })} span={1}>
          {image.sports}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.technics' })} span={1}>
          {image.technics}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.transport' })} span={1}>
          {image.transport}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'image.dataUri' })} span={1}>
          {image.dataUri}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="internet" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.avatar' })} span={1}>
          {internet.avatar}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.email' })} span={1}>
          {internet.email}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.exampleEmail' })} span={1}>
          {internet.exampleEmail}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.userName' })} span={1}>
          {internet.userName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.protocol' })} span={1}>
          {internet.protocol}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.url' })} span={1}>
          {internet.url}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.domainName' })} span={1}>
          {internet.domainName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.domainSuffix' })} span={1}>
          {internet.domainSuffix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.domainWord' })} span={1}>
          {internet.domainWord}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.ip' })} span={1}>
          {internet.ip}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.ipv6' })} span={1}>
          {internet.ipv6}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.userAgent' })} span={1}>
          {internet.userAgent}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.color' })} span={1}>
          {internet.color}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.mac' })} span={1}>
          {internet.mac}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'internet.password' })} span={1}>
          {internet.password}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="lorem" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.word' })} span={1}>
          {lorem.word}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.words' })} span={1}>
          {lorem.words}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.sentence' })} span={1}>
          {lorem.sentence}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.slug' })} span={1}>
          {lorem.slug}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.sentences' })} span={1}>
          {lorem.sentences}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.paragraph' })} span={1}>
          {lorem.paragraph}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.paragraphs' })} span={1}>
          {lorem.paragraphs}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.text' })} span={1}>
          {lorem.text}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'lorem.lines' })} span={1}>
          {lorem.lines}
        </Descriptions.Item>
      </Descriptions>{' '}
      <Descriptions title="name" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'name.firstName' })} span={1}>
          {name.firstName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.lastName' })} span={1}>
          {name.lastName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.findName' })} span={1}>
          {name.findName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.jobTitle' })} span={1}>
          {name.jobTitle}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.gender' })} span={1}>
          {name.gender}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.prefix' })} span={1}>
          {name.prefix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.suffix' })} span={1}>
          {name.suffix}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.title' })} span={1}>
          {name.title}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.jobDescriptor' })} span={1}>
          {name.jobDescriptor}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.jobArea' })} span={1}>
          {name.jobArea}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'name.jobType' })} span={1}>
          {name.jobType}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="phone" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'phone.phoneNumber' })} span={1}>
          {phone.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'phone.phoneNumberFormat' })} span={1}>
          {phone.phoneNumberFormat}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'phone.phoneFormats' })} span={1}>
          {phone.phoneFormats}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="random" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'random.number' })} span={1}>
          {random.number}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.float' })} span={1}>
          {random.float}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.arrayElement' })} span={1}>
          {random.arrayElement}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.arrayElements' })} span={1}>
          {random.arrayElements}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.objectElement' })} span={1}>
          {random.objectElement}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.uuid' })} span={1}>
          {random.uuid}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.boolean' })} span={1}>
          {random.boolean}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.word' })} span={1}>
          {random.word}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.words' })} span={1}>
          {random.words}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.image' })} span={1}>
          {random.image}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.locale' })} span={1}>
          {random.locale}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.alpha' })} span={1}>
          {random.alpha}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.alphaNumeric' })} span={1}>
          {random.alphaNumeric}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'random.hexaDecimal' })} span={1}>
          {random.hexaDecimal}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="system" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'system.fileName' })} span={1}>
          {system.fileName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.commonFileName' })} span={1}>
          {system.commonFileName}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.mimeType' })} span={1}>
          {system.mimeType}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.commonFileType' })} span={1}>
          {system.commonFileType}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.commonFileExt' })} span={1}>
          {system.commonFileExt}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.fileType' })} span={1}>
          {system.fileType}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.fileExt' })} span={1}>
          {system.fileExt}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.directoryPath' })} span={1}>
          {system.directoryPath}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.filePath' })} span={1}>
          {system.filePath}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'system.semver' })} span={1}>
          {system.semver}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="time" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'time.recent' })} span={1}>
          {time.recent}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="vehicle" bordered layout="horizontal">
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.vehicle' })} span={1}>
          {vehicle.vehicle}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.manufacturer' })} span={1}>
          {vehicle.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.model' })} span={1}>
          {vehicle.model}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.type' })} span={1}>
          {vehicle.type}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.fuel' })} span={1}>
          {vehicle.fuel}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.vin' })} span={1}>
          {vehicle.vin}
        </Descriptions.Item>
        <Descriptions.Item label={intl.formatMessage({ id: 'vehicle.color' })} span={1}>
          {vehicle.color}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Demo;
