import { AltBody } from "@/components/Body";
import Page from "@/components/Page";
import { Box, SimpleGrid, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

interface Location {
  name: string;
  type: string;
  area: string;
  district: string;
  region: string;
}

const Locations = () => {
  const locations: Location[] = [
    {
      name: "",
      type: "",
      area: "",
      district: "",
      region: "",
    },
  ];

  return (
    <Page title="Our Locations" description="Station locations and branches">
      <AltBody title="Locations & Branches">
        <SimpleGrid columns={1} p={6}>
          <Table colorScheme="red" variant="striped" size="md">
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>NAME</Th>
                <Th>TYPE</Th>
                <Th>LOCATION</Th>
                <Th>DISTRICT</Th>
                <Th>REGION</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Th>1</Th>
                <Th>Abesim</Th>
                <Th>Service Station</Th>
                <Th>Abesim</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>2</Th>
                <Th>Ahwiaa Frimps Oil S/S</Th>
                <Th>Service Station</Th>
                <Th>Ahwiaa</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>3</Th>
                <Th>Asenua</Th>
                <Th>Service Station</Th>
                <Th>Asenua</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>4</Th>
                <Th>Bolgatanga Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Bolgatanga - Tamale Road</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>5</Th>
                <Th>Buoho Station</Th>
                <Th>Service Station</Th>
                <Th>Bouho-Kumasi</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>6</Th>
                <Th>Aboaso - Bodede FS</Th>
                <Th>Filling Station</Th>
                <Th>Aboaso - Bodede</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>7</Th>
                <Th>Dasco Gas</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Manponteng</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>8</Th>
                <Th>Alhaji Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Alhaji</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>9</Th>
                <Th>Kokrobite Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Kokrobite (Ngleshie Amanfrom)</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>10</Th>
                <Th>Pokuase Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Pokuase</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>11</Th>
                <Th>Frimps Oil 1</Th>
                <Th>Service Station</Th>
                <Th>Nkoranza</Th>
                <Th>District</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>12</Th>
                <Th>Frimps Oil 2</Th>
                <Th>Service Station</Th>
                <Th>Nkoranza</Th>
                <Th>District</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>13</Th>
                <Th>Hamile Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Hamile</Th>
                <Th>District</Th>
                <Th>Upper West</Th>
              </Tr>
              <Tr>
                <Th>14</Th>
                <Th>Japakrom Station</Th>
                <Th>Service Station</Th>
                <Th>Japakrom</Th>
                <Th>District</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>15</Th>
                <Th>Kintampo Station</Th>
                <Th>Service Station</Th>
                <Th>Kintampo</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>16</Th>
                <Th>Klagon</Th>
                <Th>Filling Station</Th>
                <Th>Klagon</Th>
                <Th>Metropolitan</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>17</Th>
                <Th>Kulungungu - Balungu Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Kulungungu - Balungu</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>18</Th>
                <Th>Mampong Ejura Road</Th>
                <Th>Service Station</Th>
                <Th>Mampong </Th>
                <Th>Municipal</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>19</Th>
                <Th>Mejub Gas</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Spintex-Accra</Th>
                <Th>Metropolitan</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>20</Th>
                <Th>Missiga Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Missiga</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>21</Th>
                <Th>Navrongo - Saboro Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Navrongo Saboro</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>22</Th>
                <Th>Penkwase</Th>
                <Th>Service Station</Th>
                <Th>Penkwase</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>23</Th>
                <Th>Pobiman Station</Th>
                <Th>Service Station</Th>
                <Th>Pobiman-Accra</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>24</Th>
                <Th>Saltpond Station</Th>
                <Th>Service Station</Th>
                <Th>Saltpond</Th>
                <Th>Municipal</Th>
                <Th>Central</Th>
              </Tr>
              <Tr>
                <Th>25</Th>
                <Th>Taifa Fimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Taifa</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>26</Th>
                <Th>Tamale 3 LPG</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Tamale- Vittin</Th>
                <Th>Metropolitan</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>27</Th>
                <Th>Tamale Station</Th>
                <Th>Filling Station</Th>
                <Th>Tamale (Dungu)</Th>
                <Th>Metropolitan</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>28</Th>
                <Th>Tamale Station 3</Th>
                <Th>Filling Station</Th>
                <Th>Vitting</Th>
                <Th>Metropolitan</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>29</Th>
                <Th>Tanoso Station</Th>
                <Th>Service Station</Th>
                <Th>Tanoso</Th>
                <Th>Metropolitan</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>30</Th>
                <Th>Techiman LPG </Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Techiman</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>31</Th>
                <Th>Techiman Station</Th>
                <Th>Filling Station</Th>
                <Th>Techiman</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>32</Th>
                <Th>Tetegu-Kasoa Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Tetegu</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>33</Th>
                <Th>Wa - SSNIT Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Wa - SSNIT</Th>
                <Th>Municipal</Th>
                <Th>Upper West</Th>
              </Tr>
              <Tr>
                <Th>34</Th>
                <Th>Wuntuma SS</Th>
                <Th>Service Station</Th>
                <Th>Industial Area</Th>
                <Th>Metropolitan</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>35</Th>
                <Th>Yendi SS</Th>
                <Th>Service Station</Th>
                <Th>Yendi</Th>
                <Th>Municipal</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>36</Th>
                <Th>Fiapre Frimps</Th>
                <Th>Filling Station</Th>
                <Th>Fiapre</Th>
                <Th>District</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>37</Th>
                <Th>Goaso Frimps</Th>
                <Th>Filling Station</Th>
                <Th>Goaso</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>38</Th>
                <Th>Daboya FS</Th>
                <Th>Filling Station</Th>
                <Th>Daboya</Th>
                <Th>District</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>39</Th>
                <Th>Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Tatale</Th>
                <Th>District</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>40</Th>
                <Th>Frimps Oil</Th>
                <Th>Filling Station</Th>
                <Th>Abokobi-Boi</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>41</Th>
                <Th>Nkoranza FS</Th>
                <Th>Filling Station</Th>
                <Th>Nkoranza</Th>
                <Th>District</Th>
                <Th>Bono East</Th>
              </Tr>
              <Tr>
                <Th>42</Th>
                <Th>Mpintsin SS</Th>
                <Th>Service Station</Th>
                <Th>Mpintsin</Th>
                <Th>Metropolitan</Th>
                <Th>Western</Th>
              </Tr>
              <Tr>
                <Th>43</Th>
                <Th>Tepa Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Tepa</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>44</Th>
                <Th>Kyerepatre Frimps</Th>
                <Th>Service Station</Th>
                <Th>Kyerepatre</Th>
                <Th>Metropolitan</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>45</Th>
                <Th>Dorma Ahenkro SS</Th>
                <Th>Service Station</Th>
                <Th>Dormaa Ahenkro</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>46</Th>
                <Th>Frimps Oil </Th>
                <Th>Service Station</Th>
                <Th>Akumadan</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>47</Th>
                <Th>Tabora Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Tabora</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>48</Th>
                <Th>Sunyani STC Frimps S/S</Th>
                <Th>Service Station</Th>
                <Th>Sunyani(Poly)</Th>
                <Th>Municipal</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>49</Th>
                <Th>Ahenema Kokoben Frimps FS</Th>
                <Th>Filling Station</Th>
                <Th>Ahenema Kokoben</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>50</Th>
                <Th>Mejub Company Limited</Th>
                <Th>Filling Station</Th>
                <Th>Spintex Road</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>51</Th>
                <Th>Frimps Oil</Th>
                <Th>Service Station</Th>
                <Th>Koforidua</Th>
                <Th>Municipal</Th>
                <Th>Eastern</Th>
              </Tr>
              <Tr>
                <Th>52</Th>
                <Th>Frimps Gas</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Nkoranza</Th>
                <Th>District</Th>
                <Th>Brong Ahafo</Th>
              </Tr>
              <Tr>
                <Th>53</Th>
                <Th>Frimps Oil </Th>
                <Th>Filling Station</Th>
                <Th>Keta</Th>
                <Th>Municipal</Th>
                <Th>Volta</Th>
              </Tr>
              <Tr>
                <Th>54</Th>
                <Th>Paga FS</Th>
                <Th>Filling Station</Th>
                <Th>Paga</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>55</Th>
                <Th>Ogbojo SS</Th>
                <Th>Service Station</Th>
                <Th>Obgojo</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>56</Th>
                <Th>Edumadze-Mankessim FS</Th>
                <Th>Filling Station</Th>
                <Th>Edumadze-Mankessim </Th>
                <Th>Municipal</Th>
                <Th>Central</Th>
              </Tr>
              <Tr>
                <Th>57</Th>
                <Th>Asempaneye SS</Th>
                <Th>Service Station</Th>
                <Th>Asempaneye</Th>
                <Th>District</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>58</Th>
                <Th>Yendi LPG</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Yendi</Th>
                <Th>Municipal</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>59</Th>
                <Th>Tindonsobligo SS</Th>
                <Th>Service Station</Th>
                <Th>Tindonsobligo</Th>
                <Th>Municipal</Th>
                <Th>Upper East</Th>
              </Tr>
              <Tr>
                <Th>60</Th>
                <Th>Denkyemuoso FS</Th>
                <Th>Filling Station</Th>
                <Th>Denkyemuoso</Th>
                <Th>Metropolitan</Th>
                <Th>Ashanti</Th>
              </Tr>
              <Tr>
                <Th>61</Th>
                <Th>Aplaku SS</Th>
                <Th>Service Station</Th>
                <Th>Aplaku</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>62</Th>
                <Th>Japekrom LPG</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Japakrom</Th>
                <Th>District</Th>
                <Th>Bono </Th>
              </Tr>
              <Tr>
                <Th>63</Th>
                <Th>Asenema SS</Th>
                <Th>Service Station</Th>
                <Th>Asenema</Th>
                <Th>District</Th>
                <Th>Eastern</Th>
              </Tr>
              <Tr>
                <Th>64</Th>
                <Th>Sefwi Awaso SS</Th>
                <Th>Service Station</Th>
                <Th>Sefwi Awaso</Th>
                <Th>Municipal</Th>
                <Th>Western</Th>
              </Tr>
              <Tr>
                <Th>65</Th>
                <Th>Achimota FS</Th>
                <Th>Filling Station</Th>
                <Th>Achimota</Th>
                <Th>Municipal</Th>
                <Th>Greater Accra</Th>
              </Tr>
              <Tr>
                <Th>66</Th>
                <Th>Gomoa Jukwa SS</Th>
                <Th>Service Station</Th>
                <Th>Gomoa Jukwa</Th>
                <Th>District</Th>
                <Th>Central</Th>
              </Tr>
              <Tr>
                <Th>67</Th>
                <Th>Lamashegu Gas</Th>
                <Th>Liquefied Petroleum Gas</Th>
                <Th>Lamashegu</Th>
                <Th>Metropolitan</Th>
                <Th>Northern</Th>
              </Tr>
              <Tr>
                <Th>68</Th>
                <Th>Ketan SS</Th>
                <Th>Service Station</Th>
                <Th>Ketan</Th>
                <Th>Metropolitan</Th>
                <Th>Western</Th>
              </Tr>
              <Tr>
                <Th>69</Th>
                <Th>Akotom Pretea SS</Th>
                <Th>Service Station</Th>
                <Th>Akotom Pretea</Th>
                <Th>District</Th>
                <Th>Western</Th>
              </Tr>
            </Tbody>
          </Table>
        </SimpleGrid>
      </AltBody>
    </Page>
  );
};

export default Locations;
